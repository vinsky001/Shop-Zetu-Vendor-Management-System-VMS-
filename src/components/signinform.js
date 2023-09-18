import React, { useState } from "react";
import * as Components from "./Components";

export default function SigninForm() {
  const [signIn, toggle] = React.useState(true);
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Corrected the content-Type
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        window.location.href = '/';
        console.log('Logged in User');
      } else {
        // Handle login error
        console.error('Login Failed');
      }
    } catch (error) {
      if (error.response.status === 401) { // Corrected the response status
        alert('Invalid credentials');
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Successfully registered, handle the response as needed
        const data = await response.json();
        console.log("Registered user:", data);
      } else {
        // Handle registration error here, e.g., display an error message
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error while registering:", error);
    }
  };

  return (
    <>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Join as Vendor</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                Sign in below to access your dashboard
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello there!</Components.Title>
              <Components.Paragraph>
                Ready to start journey with us? Click the signup button below
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
}
