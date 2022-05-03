import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import CourseCategory from "./pages/CourseCategory";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
const theme = createTheme({
  //here you set palette, typography ect...
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/categories" element={<CourseCategory />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
