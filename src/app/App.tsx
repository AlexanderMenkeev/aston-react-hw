import MainLayout from "../shared/layouts/MainLayout";
import PostList from "../widgets/PostList";
import { POSTS } from "../shared/mocks";

function App() {
  return (
    <MainLayout>
      <PostList posts={POSTS} />
    </MainLayout>
  );
}

export default App;
