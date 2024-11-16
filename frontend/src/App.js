import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from "./AuthContext";
import "./index.css";
import RedirectIfAuthenticated from './RedirectIfAuthenticated';

import Homevitrine from "./components/vitrine/Homevitrine";
import Dashboard from "./components/dashboard/Dashboard";

import Addorder from "./pages/Addorder";
import Signup from "./components/dashboard/Signup";
import VerificationPage from "./components/dashboard/VerificationPage";
import VerifyEmail from "./components/dashboard/VerifyEmail";
import Notfoundpage from "./components/Notfoundpage";
import Signinpage from "./components/dashboard/Signinpage";
import Userlist from "./components/dashboard/admin/Userlist";
import AddShape from "./components/dashboard/admin/AddShape";
import AllShapes from "./components/dashboard/admin/AllShapes";
import AddMaterial from "./components/dashboard/admin/AddMaterial";
import AllMaterial from "./components/dashboard/admin/AllMaterial";
import AddAngle from "./components/dashboard/admin/AddAngle";
import AllAngles from "./components/dashboard/admin/AllAngles";
import AddEdge from "./components/dashboard/admin/AddEdge";
import AllEdges from "./components/dashboard/admin/AllEdges";
import AddMaterialType from "./components/dashboard/admin/AddMaterialType";
import Clientlist from "./components/dashboard/admin/Clientslist";
import Userview from "./components/dashboard/admin/Userview";
import AllMaterialType from "./components/dashboard/admin/AllMaterialType";
import Clientview from "./components/dashboard/admin/Clientview";
import Profile from "./components/dashboard/Profile";
import Orderhistory from "./components/dashboard/user/Orderhistory";
import OrderView from "./components/dashboard/OrderView";
import AllOrders from "./components/dashboard/admin/AllOrders";
import OverViewAdmin from "./components/dashboard/admin/OverViewAdmin";
import PrivateChat from "./components/dashboard/PrivateChat";
import PrivateChatAdmin from "./components/dashboard/PrivateChatAdmin";
import FAQ from "./components/dashboard/FAQ";
import AboutUs from "./components/dashboard/AboutUs";
import Settings from "./components/dashboard/admin/Settings";
import Statistic from "./components/dashboard/Statistic";
import UpdateMaterialType from "./components/dashboard/admin/UpdateMaterialType";
import UpdateEdge from "./components/dashboard/admin/UpdateEdge";
import UpdateAngle from "./components/dashboard/admin/UpdateAngle";
import UpdateMaterial from "./components/dashboard/admin/UpdateMaterial";
import UpdateShape from "./components/dashboard/admin/UpdateShape";
import UpdateOrder from "./components/dashboard/UpdateOrder";



const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Homevitrine />}></Route>
            <Route path="/dashboard" element={
              <ProtectedRoute roles={['admin','assistance', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Statistic"/>
              </ProtectedRoute>
            }>
              <Route index element={<Statistic/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Clients"/>
              </ProtectedRoute>
            }>
              <Route path="clients" element={<ProtectedRoute roles={['admin']}><Clientlist/></ProtectedRoute>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/clients":"Clients"},]} lastbreadcrumbItem ="View Client"/>
              </ProtectedRoute>
            }>
              <Route path="viewclient/:userId" element={<ProtectedRoute roles={['admin']}><Clientview/> </ProtectedRoute>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Users"/>
              </ProtectedRoute>
            }>
              <Route path="users" element={<ProtectedRoute roles={['admin']}><Userlist /></ProtectedRoute>} />//, 'assistance'
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/users":"Users"},]} lastbreadcrumbItem ="View User"/>
              </ProtectedRoute>
            }>
              <Route path="viewuser/:userId" element={<ProtectedRoute roles={['admin']}><Userview/> </ProtectedRoute>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Orders"/>
              </ProtectedRoute>
            }>
              <Route path="allorders" element={<ProtectedRoute roles={['admin']}><AllOrders/> </ProtectedRoute>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allorders":"Orders"},]} lastbreadcrumbItem ="View Order"/>
              </ProtectedRoute>
            }>
            <Route path="orderView/:orderId/:userId" exact element={<ProtectedRoute roles={['admin']}><OverViewAdmin/> </ProtectedRoute>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allorders":"Orders"},]} lastbreadcrumbItem ="Edit Order"/>
              </ProtectedRoute>
            }>
              <Route path="editorder/:orderId" element={<UpdateOrder/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Settings"/>
              </ProtectedRoute>
            }>
              <Route path="settings" element={<ProtectedRoute roles={['admin']}><Settings/> </ProtectedRoute>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Shapes"/>
              </ProtectedRoute>
            }>
              <Route path="allshapes" element={<AllShapes />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allshapes":"Shapes"},]} lastbreadcrumbItem ="Add Shape"/>
              </ProtectedRoute>
            }>
              <Route path="addshape" element={<AddShape />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allshapes":"Shapes"},]} lastbreadcrumbItem ="Edit Shape"/>
              </ProtectedRoute>
            }>
              <Route path="updateshape/:ShapeId" element={<UpdateShape/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Materials"/>
              </ProtectedRoute>
            }>
              <Route path="allmaterials" element={<AllMaterial />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allmaterials":"Materials"},]} lastbreadcrumbItem ="Add Material"/>
              </ProtectedRoute>
            }>
              <Route path="addmaterial" element={<AddMaterial />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allmaterials":"Materials"},]} lastbreadcrumbItem ="Edit Material"/>
              </ProtectedRoute>
            }>
              <Route path="updatematerial/:MaterialId" element={<UpdateMaterial/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Angles"/>
              </ProtectedRoute>
            }>
              <Route path="allangles" element={<AllAngles />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allangles":"Angles"},]} lastbreadcrumbItem ="Add Angle"/>
              </ProtectedRoute>
            }>
              <Route path="addangle" element={<AddAngle />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allangles":"Angles"},]} lastbreadcrumbItem ="Edit Angle"/>
              </ProtectedRoute>
            }>
              <Route path="updateangle/:AngleId" element={<UpdateAngle/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Edges"/>
              </ProtectedRoute>
            }>
              <Route path="alledges" element={<AllEdges />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/alledges":"Edges"},]} lastbreadcrumbItem ="Add Edge"/>
              </ProtectedRoute>
            }>
              <Route path="addedge" element={<AddEdge />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/alledges":"Edges"},]} lastbreadcrumbItem ="Edit Edge"/>
              </ProtectedRoute>
            }>
              <Route path="updateedge/:EdgeId" element={<UpdateEdge/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Materials Types"/>
              </ProtectedRoute>
            }>
              <Route path="allMaterialType" element={<AllMaterialType/>} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allMaterialType":"Materials Types"},]} lastbreadcrumbItem ="Add Material Type"/>
              </ProtectedRoute>
            }>
              <Route path="addMaterialType" element={<AddMaterialType />} />
            </Route>
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin', 'technician']}>
                <Dashboard  breadcrumb={[{"/admin/allMaterialType":"Materials Types"},]} lastbreadcrumbItem ="Edit Material Type"/>
              </ProtectedRoute>
            }>
              <Route path="updateMaterialType/:materialTypeId" element={<UpdateMaterialType/>} />
            </Route>

            <Route path="/chat" element={
              <ProtectedRoute roles={['admin', 'assistance', 'client']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Private Chat"/>
              </ProtectedRoute>
            }>
              <Route path="client" element={<ProtectedRoute roles={['client']}><PrivateChat/> </ProtectedRoute>} />
              <Route path="staff" element={<ProtectedRoute roles={['admin', 'assistance']}><PrivateChatAdmin/></ProtectedRoute>} />
            </Route>



            <Route path="/user" element={
              <ProtectedRoute roles={['client']}>
                <Dashboard  breadcrumb={[]} lastbreadcrumbItem ="Order History"/>
              </ProtectedRoute>
            }>
              <Route path="allorders" exact element={<Orderhistory/>} />
            </Route>
            <Route path="/user" element={
              <ProtectedRoute roles={['client']}>
                <Dashboard  breadcrumb={[{"/user/allorders":"Order History"},]} lastbreadcrumbItem ="View Order"/>
              </ProtectedRoute>
            }>
            <Route path="orderView/:orderId" exact element={<OrderView/>} />
            </Route>
            <Route path="/user" element={
              <ProtectedRoute roles={['client']}>
                <Dashboard  breadcrumb={[{"/user/allorders":"Order History"},]} lastbreadcrumbItem ="Add Order"/>
              </ProtectedRoute>
            }>
              <Route path="addorder" exact element={<Addorder />} />//   /:userId
            </Route>
            <Route path="/user" element={
              <ProtectedRoute roles={['client']}>
                <Dashboard  breadcrumb={[{"/user/allorders":"Order History"},]} lastbreadcrumbItem ="Edit Order"/>
              </ProtectedRoute>
            }>
              <Route path="editorder/:orderId" element={<UpdateOrder/>} />
            </Route>

            <Route path="/user" element={
              <ProtectedRoute roles={['client','admin','technician','assistance']}>
                <Dashboard breadcrumb={[]} lastbreadcrumbItem ="My profile" />
              </ProtectedRoute>
            }>
              <Route path="profile/:userId" element={<Profile/>} />
            </Route>

            <Route path="/auth/signin" exact element={<RedirectIfAuthenticated><Signinpage /></RedirectIfAuthenticated>} />
            <Route path="/auth/verifemail" exact element={<RedirectIfAuthenticated><VerifyEmail /></RedirectIfAuthenticated>} />
            <Route path="/auth/signup" element={<RedirectIfAuthenticated><Signup /></RedirectIfAuthenticated>} />
            <Route path="/auth/:userId/verify/:token" element={<RedirectIfAuthenticated><VerificationPage /></RedirectIfAuthenticated>} />

            <Route path="/faq" element={
                <Dashboard breadcrumb={[]} lastbreadcrumbItem ="FAQ" />
            }>
              <Route index element={<FAQ/>} />
            </Route>

            <Route path="/aboutus" element={
                <Dashboard breadcrumb={[]} lastbreadcrumbItem ="About" />
            }>
              <Route index element={<AboutUs/>} />
            </Route>

            <Route path="/404" exact element={<Notfoundpage />} />
            <Route path="*" element={<Notfoundpage />} />

          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;