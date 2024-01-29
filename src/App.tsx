// JSX = JavaScript + XML

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { PostType } from './components/Post'

import styles from './App.module.css'

import './global.css';

const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/FelipeDestroo.png',
        name: 'Felipe Destro',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content: 'Oi pessoal 👋', },
        { type: 'paragraph', content: 'Testando o meu projeto com react + ts' },
        { type: 'link', content: 'https://github.com/FelipeDestroo' },               
      ],
      publishedAt: new Date('2024-01-26 12:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },               
      ],
      publishedAt: new Date('2024-01-27 12:00:00')
    },
];

// iteração

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}

export default App

