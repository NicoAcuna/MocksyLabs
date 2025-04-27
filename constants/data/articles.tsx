import { Article } from "../types";
import AuthorImage from "../../assets/images/article-author-1.png";
import ArticleImage from "../../assets/images/article-image-1.png";
import VideoImage from "../../assets/images/video-image.png";

export const articlesData: Array<Article> = [
  {
    slug: "creating-an-account",
    category: "Getting Started",
    image: ArticleImage,
    updatedAt: new Date(),
    title: "Creating an account",
    name: "Creating an account",
    text: "Welcome to Mosafe! To start using our safety management platform, you will need to create an account. This guide will take you through the steps to create an account and get started with Mosafe.",
    author: {
      firstName: "Brad",
      lastName: "Johnson",
      avatar: AuthorImage,
    },
    chapters: [
      {
        cssId: "sign-up",
        title: "Accessing the Sign-Up Page",
        content: (
          <p>
            To create an account on Mosafe, go to our website and click on the "Sign Up" button located at the top right corner of the homepage. You will then be redirected to the sign-up page.<br></br>
<br></br>
            If you're signing up on the mobile app, make sure you've downloaded the app and tap "Get started". 
          </p>
        ),
      },
      {
        cssId: "setting-up-your-workspace",
        title: "Filling Out the Sign-Up Form",
        content: (
          <p>
            When you start the sign up process, you'll first be required to provide your work email. We'll use this email address to create your Mosafe account. We'll also send your one-time passcodes to your email whenever you need to sign into a new device or browswer (this won't be too often!), plus this means one less password to remember!<br></br>
            <br></br>
            Make sure to have your emails handy! 
          </p>
        ),
      },
      {
        cssId: "creating-your-account",
        title: "Verifying Your Account",
        content: (
          <p>
            Go to your emails, copy and paste the 6 digit passcode into the sign up form. You're almost there!<br></br>
            <br></br>
            Now just fill in your first name and last name, and complete the sign up process. 
          </p>
        ),
        image: VideoImage,
      },
      {
        cssId: "editing-your-personal-details",
        title: "Accepting Workspace Invitations",
        content: (
          <p>
            If you've been invited by your employer, you will see a Workspace Invitation waiting for you, first thing, when you sign into your new account. Click Accept Invitation and you're good to go!
          
          <br></br>
          <br></br>
          Congratulations! You have successfully created an account on Mosafe and are now ready to start using our platform to manage your safety processes.
          <br></br>
          <br></br>
We hope this guide helps you create your Mosafe account with ease. If you have any questions or need further assistance, don't hesitate to reach out to our support team.

          </p>

        ),
      },
    ],
  },
  
];
