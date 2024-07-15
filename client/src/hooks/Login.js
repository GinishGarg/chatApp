import { useState } from "react";
import { useAuthContext } from "../components/context/AuthContext";
import toast from "react-hot-toast";

  const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {

       const success=await handleInputErrors(username,password)

       if(!success){
        return;
       }
      setLoading(true);



      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    return { loading,login };
  };

export default useLogin;

async function handleInputErrors(username,password) {
      
      if ( !username || !password ) {
          toast.error("Please fill all the fields");
          await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second
          return false;
        }
        
        return true;
  }
  