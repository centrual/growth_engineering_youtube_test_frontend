# Growth Engineering Youtube Test

Hello Growth Engineering 🖐

This project demonstrates the front end of the youtube test.

---

## Getting Started

This project needs [Node.js](https://nodejs.org/en/) version 14 or 16.

> I using [yarn package manager](https://yarnpkg.com/). If you don't want to use yarn please delete `yarn.lock` file before install command.

We need to [Git](https://git-scm.com/downloads) to clone the repository.

Lastly we need [personal access token on github](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to clone the repository. `repo` scope is enough to clone this private repository. Please copy your generated personal access token in safe, we will use it in the next steps.

If everything ready, let's start!

Please clone the project from CLI tool ( terminal | command prompt | powershell etc. ):

```
git clone https://github.com/centrual/growth_engineering_youtube_test_frontend.git
```

> This command can ask your credentials. Please use your `Github username` as username and `personal access key` as password.

Then you are ready to use this project!

Install the dependencies with:

`npm i` or `yarn install`

then start the project with:

`npm run start` or `yarn start`

If web browser isn't automatically opened then open the web browser and go to `http://localhost:3000`.

🎉 Wunderbar! 🎊

You can use the application now...

---

## Deployment instructions

If you want to see website on `dev.geyt.ml` then just push updated code to `dev` branch on git repository. Or if you want to see website on `geyt.ml` or `www.geyt.ml` then push updated code to `staging` branch on git repository.

If you want to deploy the project elsewhere, build the project with `npm run build` or `yarn build` command then deploy content of `build` directory via FTP or another transfer tool.

---

## Used Packages

1. [react-router-dom](https://github.com/ReactTraining/react-router) for application navigation.
2. [react-image](https://github.com/mbrevda/react-image) for image replacement when image not available.
3. [react-player](https://github.com/CookPete/react-player) to display videos from youtube.
4. [moment-timezone](https://github.com/moment/moment-timezone/) to parse dates and times.
5. [react-moment](https://github.com/headzoo/react-moment) to show formatted video upload date like "4 hours ago".
6. [react-number-format](https://www.npmjs.com/package/react-number-format) to show formatted view count like "12.567 views".
7. [react-lottie](https://github.com/chenqingspring/react-lottie) to show wonderfully animated images. Special thanks to [Lottie Files](https://www.lottiefiles.com/).
8. [react-virtualized](https://github.com/bvaughn/react-virtualized) to make playlist items scrollable without throttle.
9. [react-js-loader](https://github.com/AmurKhoyetsyan/react-js-loader) for nice loader animations.
10. [Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) to show awesome 😎 icons:
    1. @fortawesome/fontawesome-svg-core
    2. @fortawesome/free-regular-svg-icons
    3. @fortawesome/free-solid-svg-icons
    4. @fortawesome/react-fontawesome

Thanks to [undraw](https://undraw.co/illustrations) for blank canvas image.

---

## Fonts

1. [Poppins](https://fonts.google.com/specimen/Poppins)

---

## Project Structure

Because the API key sharing is insecure I split the project into 3 parts. This parts are:

1. Frontend *
2. [OpenAPI Declarations](https://github.com/centrual/growth_engineering_youtube_test_openapi)
3. [Backend](https://github.com/centrual/growth_engineering_youtube_test_server)

---

## Used Technologies

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* CSS modules are used for the styling of components.
* Atomic design methodology was used to keep the components in order.

I made very simple youtube playlist template with Adobe XD.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
