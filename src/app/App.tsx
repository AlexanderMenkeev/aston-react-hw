import MainLayout from "../shared/layouts/MainLayout";
import PostList from "../widgets/PostList";
import { POSTS } from "../shared/mocks";
import { ThemeProvider } from "../shared/lib/theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <PostList posts={POSTS} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
