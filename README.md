<<<<<<< HEAD
# mu-portfolio
=======
# Professional React Portfolio

A modern, high-performance portfolio website built with React, Vite, and Tailwind CSS. Featuring advanced animations, 3D elements, and a fully responsive design.

![Portfolio Preview](public/vite.svg) <!-- Replace with an actual screenshot later if available -->

## 🚀 Features

-   **Modern Tech Stack**: Built with React 19 and Vite for blazing fast performance.
-   **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop.
-   **Dark/Light Mode**: Seamless theme switching with persistent user preference.
-   **Advanced Animations**: Smooth page transitions and element interactions using `framer-motion`.
-   **3D Elements**: Interactive 3D Hero section powered by `react-three-fiber` and `three.js`.
-   **Interactive UI**:
    -   **Tilt Effects**: Project cards tilt in 3D space on hover.
    -   **Scroll Progress**: Visual indicator of reading position.
    -   **Animated Backgrounds**: Subtle, dynamic background particles.

## 🛠️ Tech Stack

-   **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [Drei](https://github.com/pmndrs/drei)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📦 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/my-portfolio.git
    cd my-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components (Navbar, Card, Tilt, etc.)
├── sections/          # Page sections (Hero, About, Projects, Contact)
├── data/              # Static content and data
├── assets/            # Images and static assets
├── App.jsx            # Main application component
└── main.jsx           # Entry point
```

## 🎨 Customization

-   **Colors**: Update `tailwind.config.cjs` to change the brand color palette.
-   **Content**: Edit files in `src/data/` to update your personal information, projects, and skills.
-   **3D Shapes**: Modify `src/components/Hero3D.jsx` to change the floating geometries.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
>>>>>>> 13790a4 (Initial commit)
