import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import GerenciarEvento from "./pages/EventManager/EventManager";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<GerenciarEvento />} />
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
