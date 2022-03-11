import { BrowserRouter, Route, Switch} from 'react-router-dom'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import {Room} from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

import {AuthContextProvider} from './context/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/rooms/new" exact component={NewRoom}></Route>
            <Route path="/rooms/:id" exact component={Room}></Route>
            <Route path="/admin/rooms/:id" exact component={AdminRoom}></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
    );}

export default App;
