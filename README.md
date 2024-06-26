# Website PET Computação UFRGS

### <a href="https://petcompufrgs.com.br/">Check out the project running →</a>

---

### Table of Contents

##### 1. [About this project](#about)

##### 2. [Technologies used](#stack)

##### 3. [Install and run the project](#installation)

##### 4. [How this project is organized](#organization)

##### 5. [Maintenance](#maintenance)

##### 6. [Screenshots](#screenshots)

##### 7. [Learn More](#learn-more)

---

<a name="about"></a>

## About this project

PET is a scholarship available in a lot of universities in Brazil. Their main goal is to provide an opportunity for students to develop themselves by studying topics of their interests and share their learnings with the community. The group PET Computação UFRGS is a group composed by graduate students of Computer Science and Engineering.

The group is constantly changing and adapting. This means that web development is not always a topic of interest of the group. So, for this reason, is important to make the website maintenance as easy as possible. However, it is crucial to keep it easily customizable, because, after all, the group is formed by tech students and they must have a space to exercise their knowledge and creativity if they desire.

With this in mind, this project was made. The intention is to make a website that can be updated only by editing a javascript object but, at the same time, has the possibility to customizations without the need to change all the structure of the project.

If you want to know more about the PET Computação, have a look at their social media (portuguese only)

<div>

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)]("mailto:pet@inf.ufrgs.br")
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/petcompufrgs/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/petcompufrgs)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UCtAtfIs2EnANkerAjMas_8A)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://www.facebook.com/PETCompUFRGS)

</div>

### or <a href="https://www.inf.ufrgs.br/site/pet/" target="_blank">check our website →</a>

---

<a name="stack"></a>

## Technologies used

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

<a name="installation"></a>

## Install and run the project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

After cloning the project, run the installation of node modules:

```bash
npm install
# or
yarn
```

Now, you are ready to run the development server:

```bash
npm run dev
# or
yarn dev
```

The server will run on [http://localhost:3000](http://localhost:3000), so you can open your browser to see the result. The page auto-updates as you edit the file.

---

<a name="organization"></a>

## How this project is organized

This projects has a pretty basic folder structure

```bash
public
src
 |_ components
 |_ customComponents
 |_ data
 |_ hooks
 |_ images
 |_ pages
 |_ styles
 |_ types
 |_ views
```

### `public`

Contains the `favicon.ico`, that is the little icon that appears on the tab of the page.

### `src`

This folder is the core of the project and contains all the info to build the website.

#### `components`

Contains all the components used to build the webpage main structure.

#### `customComponents`

Contains all the custom components used on the project's page.

#### `data`

Contains all the info displayed on screen of the website. The data are divided in three files: `footer.ts` (links to mail and all social media that appear on the footer); `homePage.ts` (data of the home page); `membersPage.ts` (data of the members page); and `projects.ts` (data about all the projects and guides/courses - this data is partially used on homepage and used to build the project page).

#### `hooks`

Contains useful functions.

#### `images`

Contains the assets that are saved on the project.

#### `pages`

Contains the pages of the project. With Next.js, each file defines a url of the website based on the name of the file. So for this project, there is the home page (`index.tsx`) and the members page (`petianes.tsx`).

Besides that, we have the pages with the path `projects/project-name`. This pages are built dynamically, with the info `href` from projects objects, available in `data/projects.ts`.

#### `styles`

Contains styles used through out the website. The file `theme.ts` defines the colors used and the `devices.ts` file defines some sizes for devices.

#### `types`

Contains some types for general use.

#### `views`

Contains the three main views of the project. A view is a whole page, built with the components from components page.

---

<a name="maintenance"></a>

## Maintenance

### Add, remove or update member

To add, remove or update a member, access `src/data/membersPage.ts`.

This file contains an object like the following:

```typescript
export const membersPage: IMemberPage = {
  title: 'Nossos petianes',
  members: [
    // ... members
    {
      name: 'Member',
      imgUrl: 'url-to-member-image',
      course: 'their course or if they are the tutor',
      semester: '20XX/X',
      interest: 'what this member likes?',
    },
    // ... more members
  ],
}
```

If you want to add a new member, just add another member object and add the necessary info. To edit or remove a member, find them and make the changes or delete the object.

In this object you can edit the page title too!

### Add, remove or update project or course

To add, remove or update a project, access `src/data/projects.ts`.

In this file, there are two namespaces: `projects` and `courses`.

So, to add a new project or course, create an object with the correct type (`ProjectType` or `CourseType`) and add the necessary info. After that, the object will be available to be used on the website.

To edit a project or course, just find the item you need and update the info. To remove a project or course, find the item, delete it.

#### Add custom components to projects

Each project can have one custom component added to them. To do that, first, you have to create your custom component in the folder `customComponents`. Then add the name of the component in the project object (`data/projects.ts`) in the prop `customContent`.

---

<a name="screenshots"></a>

## Screenshots

![home page screenshot](https://user-images.githubusercontent.com/44807606/213203766-f3a14672-ea75-4970-8665-c5b26adec2f5.png)
_Home page_

![dino project page screenshot](https://user-images.githubusercontent.com/44807606/213206149-8cc88b8a-6730-4bb2-a4c9-bc44fb201965.png)
_Project page_

![members page screenshot](https://user-images.githubusercontent.com/44807606/213204171-cb3d03c5-ed87-4e44-8c02-3d694e154da5.png)
_Members page_

---

<a name="learn-more"></a>

## Learn more

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### React JS

To learn more about React, you can check out the React Documentation:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/).

### Typescript

If you want to learn more about Typescript, you can take a look at these resources:

- [Typescript documentation](https://www.typescriptlang.org/docs/)
- [Typescript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Styled Components

Finally, if you want to know more about Styled Components, check their documentation:

- [Styled Components documentation](https://styled-components.com/docs)
