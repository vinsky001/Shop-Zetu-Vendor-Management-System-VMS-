import React from "react";
import * as Components from "./Components";

export default function SigninForm() {
  const [signIn, toggle] = React.useState(true);
  return (
    <>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Join as Vendor</Components.Title>
            <Components.Input type="text" placeholder="First name" />
            <Components.Input type="text" placeholder="Last name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Input type="password" placeholder="Confirm password" />
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
            <Components.Button>Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                Signin below to access your dashboard
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
