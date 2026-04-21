import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {HStack} from '@vapor-ui/core'
import DefaultMultiSelect, { MultiSelectTemplate } from './components/MultiSelect'

function App() {
  return (
    <HStack $css={{ gap: '$150', alignItems: 'center' }}> {/*프로퍼티마다 HStack 값이 다 동일해서 app.jsx에 가져옴*/}
      <MultiSelectTemplate 
        size= "md" placeholder="md 사이즈의 프로퍼티만 불러오기" //이렇게 특정 프로퍼티만 불러오게 할 수 있음
      />
    </HStack>
  )
}

export default App
