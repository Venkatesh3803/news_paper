import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import NewsPage from './Pages/NewsPage'
import News from './Pages/News'
import ProfilePage from './Pages/ProfilePage'
import SettingPage from './Pages/SettingPage'
import Addnews from './Pages/Addnews'
import EditPostPage from './Pages/EditPostPage'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/sports' element={<News category="Sports" />} />
        <Route path='/news/health' element={<News category="Health" />} />
        <Route path='/news/political' element={<News category="Political" />} />
        <Route path='/news/business' element={<News category="Busniess" />} />
        <Route path='/news/finance' element={<News category="Finance" />} />
        <Route path='/news/life' element={<News category="Life" />} />
        <Route path='/news/entertainment' element={<News category="Entertainment" />} />
        <Route path='/editpost/:id' element={<EditPostPage/>} />c
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/settings/:id' element={<SettingPage />} />
        <Route path='/addnews' element={<Addnews />} />
        <Route path='/news/:id' element={<NewsPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
