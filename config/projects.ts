export const projects = [
  {
    id: 1,
    title: "Hỏi đáp thuốc",
    date: "May 2024 – July 2024",
    description:
      "Hỏi đáp về thuốc với những Bs Ds có chuyên môn sâu, có kinh nghiệm lâm sàng hướng dẫn cho bệnh nhân như người thân của chính mình. Hỏi đáp thuốc giúp người dùng có thể tìm kiếm thông tin về các loại thuốc, cách sử dụng, tác dụng phụ, liều lượng, cách bảo quản, cách sử dụng thuốc an toàn và hiệu quả.",
    image: "/images/advanced-todo-list-demo.png",
    tags: ["NextJS", "Tailwind CSS", "Redux toolkit"],
    category: "web app",
    // github: "https://github.com/NguyenDonUET/advanced-todo-list-vuejs",
    liveApp: "https://hoidapthuoc.com/",
    features: [
      {
        name: "Contributed to building user interface, ensuring a responsive and user-friendly interface.",
        details: [
          "Check Users can log in using their username and password",
          "Check If they don't have an account, users can sign up by providing necessary information such as name, email, and password.",
        ],
      },
      {
        name: "Developed pagination, filtering, and search functionalities with Redux Toolkit, optimizing application state and data handling.",
        details: ["Users can create new todo, edit todo and delete task."],
      },
    ],
  },
  {
    id: 2,
    title: "Education platform",
    date: "August 2024 – February 2025",
    description:
      "Đây là nền tảng học tập trực tuyến nội bộ của công ty, hỗ trợ hai vai trò người dùng (nhân viên) và quản trị viên, cho phép quản trị viên tạo và quản lý các khóa học, còn người dùng tham gia và hoàn thành bài tập.",
    image: "/images/advanced-todo-list-demo.png",
    tags: [" React", "Redux toolkit", "Mantine UI"],
    category: "web app",
    // github: "https://github.com/NguyenDonUET/advanced-todo-list-vuejs",
    // liveApp: "https://advanced-todo-list-nguyendonuet.netlify.app",
    features: [
      {
        name: "Implemented virtualization techniques to optimize the display of large lists, improving performance and user experience.",
        details: [
          "Check Users can log in using their username and password",
          "Check If they don't have an account, users can sign up by providing necessary information such as name, email, and password.",
        ],
      },
      {
        name: "Added functionality to export table data as .xlsx files, enabling efficient data management and reporting for admins.",
        details: ["Users can create new todo, edit todo and delete task."],
      },
      {
        name: "Collaborated with the team to maintain and troubleshoot the application, ensuring a smooth user experience.",
        details: [
          "Users can search for tasks by entering keywords in the search box.Tasks matching the keywords will be displayed in the task list.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Photo Search",
    date: "Jun 2023 - Jul 2023",
    description:
      "Photo Search is a web application used to search for high-quality images based on the keywords provided by the user. Users can also download the images to their devices.",
    image: "/images/photo-search.png",
    tags: ["Reactjs", "React Query", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/NguyenDonUET/photo-search",
    liveApp: "https://photo-search-nguyendonuet.netlify.app/",
    features: [
      {
        name: "Search Image by Keyword",
        details: [
          "Users can enter keywords in a search bar to find specific images. The application will fetch and display relevant images based on the entered keywords. The search functionality allows users to easily find images of interest.",
        ],
      },
      {
        name: "Pagination",
        details: [
          "The image search results are paginated to improve usability and performance. Pagination controls, such as previous and next buttons or numbered page links, allow users to navigate through the search results. Users can easily move between pages to explore more images.",
        ],
      },
      {
        name: "Image viewer",
        details: [
          "Users can click on an image in the search results to view a larger version or open it in a popup modal. The popup image provides a better view and allows users to examine the details of the image. Users can close the popup to return to the search results.",
        ],
      },
      {
        name: "Download Image",
        details: [
          "Each image in the search results has a download button. Users can click the download button to initiate the download of the respective image. The downloaded image is saved to the user's computer, allowing them to keep a local copy.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Github Finder",
    date: "Jun 2023 - Jul 2023",
    description:
      "The idea of ​​this project was taken from a challenge on the website frontendmentor.io.",
    image: "/images/github-finder.png",
    tags: ["Vuejs", "Pinia", "TailwindCss"],
    category: "web app",
    github: "https://github.com/NguyenDonUET/github-finder-vuejs",
    liveApp: "https://github-finder-nguyendonuet.netlify.app/",
    features: [
      {
        name: "Search for GitHub users by their username",
      },
      {
        name: "Pagination",
      },
      {
        name: "Switch between light and dark themes",
      },
      {
        name: "View the optimal layout for the app depending on their device's screen size",
      },
    ],
  },
  {
    id: 4,
    title: "Shopping cart",
    date: "Jun 2023 - Jul 2023",
    description:
      "This is a simple project that helped me get familiar with using Typescript in React ",
    image: "/images/shopping-cart.png",
    tags: ["Reactjs", "Redux toolkit", "Typescript", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/NguyenDonUET/shopping-cart-ts",
    liveApp: "https://shopping-cart-ts-nguyendonuet.netlify.app/",
    features: [
      {
        name: "Add items to the cart",
        details: [
          "Users can enter keywords in a search bar to find specific images. The application will fetch and display relevant images based on the entered keywords. The search functionality allows users to easily find images of interest.",
        ],
      },
      {
        name: "Update, remove items in the cart.",
        details: [
          "The image search results are paginated to improve usability and performance. Pagination controls, such as previous and next buttons or numbered page links, allow users to navigate through the search results. Users can easily move between pages to explore more images.",
        ],
      },
      {
        name: "Clear all items in the cart.",
        details: [
          "Users can click on an image in the search results to view a larger version or open it in a popup modal. The popup image provides a better view and allows users to examine the details of the image. Users can close the popup to return to the search results.",
        ],
      },
      {
        name: "Store cart data in local storage.",
        details: [
          "Each image in the search results has a download button. Users can click the download button to initiate the download of the respective image. The downloaded image is saved to the user's computer, allowing them to keep a local copy.",
        ],
      },
    ],
  },
]

export type ProjectType = (typeof projects)[0]
