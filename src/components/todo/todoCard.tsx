"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import UserChip from "../user/userChip";
import { useSession } from "next-auth/react";
import { TodoCardType } from "@/types/todoType/todo";
import { dateFormat } from "@/utils/dateFormat";
import { Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteFetch } from "@/hooks/useFetchServerSide";
import useClientFetch from "@/hooks/useFetchClientSide";
import ConfirmDialog from "../confirm/confirmDialog";

export default function TodoCard({
  id,
  title,
  description,
  created_by,
  created_at,
  updated_at,
  handleOpenDialog,
  onDelete
}: TodoCardType) {
  const user = useSession();
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);

  const handleDelete = async () => {
    try {
      await onDelete(id)
    } catch (error) {
      console.error("Error deleting todo:", error);
    } finally {
      setOpenConfirmDialog(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<UserChip username={user.data?.user?.username} />}
          title={title}
          subheader={`สร้างวันที่: ${dateFormat(created_at.toString())}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <CardActions disableSpacing>
            <IconButton
              onClick={() =>
                handleOpenDialog({
                  id,
                  title,
                  description,
                  created_by,
                  created_at,
                  updated_at,
                })
              }
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setOpenConfirmDialog(true)}>
              <DeleteForeverIcon />
            </IconButton>
          </CardActions>
          <Typography paddingRight={2}>
            {`แก้ไขล่าสุด: ${dateFormat(created_at.toString())}`}
          </Typography>
        </Stack>
      </Card>
      <ConfirmDialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this todo?"
      />
    </>
  );
}
