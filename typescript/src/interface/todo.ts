export interface Todo {
  id?: number
  task: string
  isComplete: boolean
  author: string
  createdAt: string
}

// Teknik ini bisa digunakan oleh interfae (ts)
// sebagai deklarasi merging
// dimana ketika kita membuat hal tersebut maka otomatis akan digabungkan dengan
// interface awal yang sudah dibuat
// syaratnya: harus mempunyai nama yang sama.
export interface Todo {
  author: string
}

export interface Todo {
  createdAt: string
}

// Penggunaan di bawah ini, ini lebih ke sebuah pewarisan, yang mewariskan properti dari asal 'Todo'
export interface TodoAuthor extends Todo {
  // author: string
  // createdAt: string
}
