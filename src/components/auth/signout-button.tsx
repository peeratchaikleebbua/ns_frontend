import { signOut } from "@/auth"
import { Button } from "@mui/material"
 
export function CustomSignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button color="error" type="submit">Sign Out</Button>
    </form>
  )
}