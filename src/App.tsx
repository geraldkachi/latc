import { Suspense, useRef, } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";

import './App.css'
import { Layout } from './components';
import Context from './components/context';
import { CreateAccount, Home } from './pages';
import { ProtectedRoutes, UnProtectedRoutes } from './routers';

const App: React.FC = () => {
  // const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

  const ref = useRef<QueryClient>();
  const queryClient = new QueryClient();
  //   {
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //       refetchOnMount: false,
  //       refetchOnReconnect: false,
  //       retry: false,
  //       staleTime: twentyFourHoursInMs,
  //     },
  //   },
  // }
  ref.current = queryClient;

  return (
    <>
      <QueryClientProvider client={ref.current}>
        {/* <ToastContainer /> */}
        <Context>
          <Suspense fallback={"Loading"}>
            <Routes>
              <Route element={<UnProtectedRoutes />}>
                <Route path="/" element={<CreateAccount />} />
                {/* <Route path="/" element={<Login />} />
                  <Route path="/reset" element={<ResetPassword />} /> */}
              </Route>

              {/* Protected Roues */}
              <Route element={<ProtectedRoutes />}>
                <Route element={<Layout />}>
                  <Route path="/home" element={<Home />} />
                </Route>
              </Route>
              {/* 404 page */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Context>
      </QueryClientProvider>
    </>
  )
}

export default App
