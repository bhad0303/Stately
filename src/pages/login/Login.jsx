import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ThemeToggle from '../../components/ThemeToggle';
import { useThemeContext } from "../../context/ThemeContext";

//onBlur vaidation 


function Login() {


    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const {mode} = useThemeContext();
     

    const onSubmit = (data) => {
      localStorage.setItem('formData' ,JSON.stringify(data));
      navigate('/dashboard');
      console.log("Form Submitted:", data);
    };
      
    // const [formData,setFormData] = useState({
    //    email : '',
    //    password: ''
    // })

    // let onSubmitForm = (event)=>{
    //    event.preventDefault();
    //    let resultData = {
    //      ...formData
    //    }

    //    console.log(resultData)

    //    setFormData({
    //     email : "",
    //     password : ""
    //    })
    // }


    // let handleChange =(event)=>{
    //    setFormData({
    //      ...formData,
    //      [event.target.name] : event.target.value
    //    })
    // }


  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: mode === "light" ? "#F8FBFF" : "#121212", // Change background based on theme
        color: mode === "light" ? "#000" : "#F4F5FC", // Change text color
        boxSizing: "border-box",
        position:'relative'
        
      }}
    > 
      {/* Theme Toggle Button */}
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
      <ThemeToggle  />
      </Box>
     

      <Card sx={{ minWidth: "300px", padding: "1.3rem" ,boxShadow : '0 0 10px rgba(0,0,0,0.2)' , backgroundColor: mode === "light" ? "#F7FBFF" : "#121212"   }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              margin: "0 auto",
              letterSpacing: "0.2rem",
              color: "#D1A201",
              fontSize: 30,
              border: "2px solid #D1A201",
              width: "fit-content",
              fontWeight: 500,
              paddingLeft : '0.2rem'
            }}
          >
            STATELY
          </Typography>
        
          <Typography sx={{ fontSize: "2rem" ,fontWeight : 'bold',margin:'1rem 0'}}>Sing in</Typography>

          <form className="Login" onSubmit={handleSubmit(onSubmit)}>


            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                {...register('email',{required : 'email is required'})}
                // value ={formData.email}
                // onChange={handleChange}
               
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>


            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="*****"
                {
                  ...register('password',{
                    required : 'password is required',
                    minLength :   {value : 8,message : 'Password must be atleast 8 charcater'},
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: 'Password must contain at least one letter and one number'
                    }
                  })
                }
                // value ={formData.password}
                // onChange={handleChange}
               
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
         

          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            className={mode === 'light' ? 'btn-grad' : 'btn-dark'}
            type="submit"
          >
            Sign in
          </Button>

          <div
            style={{
              textAlign: "center",
             

            }}
          >
            <Link to="/forgot" style={{
                       color: mode === "light" ? "#000" : "#fff", // Change text color

            }}>
              Forgot password
            </Link>
          </div>

          </form>
        </CardContent>
      </Card>


    </Box>
  );
}

export default Login;
