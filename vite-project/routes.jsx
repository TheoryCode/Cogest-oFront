import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./src/components/AppLayout/AppLayout";
import { GerenciarEvento } from "./src/pages/EventManager/EventManager";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="gerenciar-eventos" element={<GerenciarEvento />} />
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
