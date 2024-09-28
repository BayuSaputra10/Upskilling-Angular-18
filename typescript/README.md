# TypeScript Section

## Task 1

Task ini menggunakan materi `variable`, `data type`, `type alias` dan `enum`.

### Soal: Manajemen Informasi Bahasa Pemrograman

Sebuah bootcamp online Enigmacamp membutuhkan sistem untuk mengelola informasi bahasa pemrograman yang tersedia.

Setiap bahasa bahasa pemrograman memiliki atribut id, nama, tahun terbit, dan status course aktif, tidak aktif.

Tugas: Implememtasi yang sudah di ajarkan seperti `variable` & `data type`, `type alias` dan `enum`

```ts
type ProgrammingLanguage ...


enum ProgrammingLanguageStatus ...

console.log(... Nama Bahasa Pemrograman 1)
console.log(... Tahun Berdiri Pemrograman)
console.log(... Status Pemrograman)

console.log(... Nama Bahasa Pemrograman 2)
console.log(... Tahun Berdiri Pemrograman)
console.log(... Status Pemrograman)

console.log(... Nama Bahasa Pemrograman 3)
console.log(... Tahun Berdiri Pemrograman)
console.log(... Status Pemrograman)
```

## Task 2

Problem
Pada tugas ini kamu diminta untuk membuat game sederhana. Untuk memulai game ini diperlukan 2 variabel yaitu nama dan peran. Kedua Variabel ini tidak boleh kosong harus ada nilainya, untuk peran sendiri terdapat 2 jenis peran yaitu Superhero & Monster. Untuk selain 2 peran tersebut kalian harus memberikan peringatan. Tugas kalian adalah untuk mengecek masing masing variabel nama dan peran tersebut.

Kriteria
Variabel Nama dan Peran dapat diisi apa saja
Buatlah if - else percabangan untuk mengecek Nama dan Peran

Output
// Jika Nama & Peran Kosong
"Nama dan Peran Harus Di Isi"

// Jika Nama Diisi & Peran Kosong
"Peran Harus Di Isi"

// Jika Nama Diisi & Peran Diisi Superhero
"Selamat Datang Superhero Saitama, Kalahkan Semua Monster Di Muka Bumi"

// Jika Nama Diisi & Peran Diisi Monster
"Selamat Datang Monster Saitama, Hancurkan Semua Superhero Yang Ada"

// Jika Nama Diisi & Peran Diisi Bukan Superhero atau Monster
"Selamat Datang Saitama, Pilih Peranmu Untuk Melanjutkan Game Ini"

## Task 3

Teruskan program berikut dan gunakan Asynchronous

### Todo Model

```ts
export interface Todo {
  id?: number
  task: string
  isCompleted: boolean
}
```

### Todo Service

```ts
import { Todo } from './todo.model'

export interface TodoService {
  Create(todo: Todo): Promise<Todo>
  List(): Promise<Todo[]>
  Get(id: number): Promise<Todo>
}
```

### Todo Service Implement

```ts
import { Todo } from './todo.model'
import { TodoService } from './todo.service'

export class PgTodoService implements TodoService {
  private todos: Todo[] = []

  Create(todo: Todo): Promise<Todo> {
    throw new Error('Method not implemented.')
  }

  List(): Promise<Todo[]> {
    throw new Error('Method not implemented.')
  }

  Get(id: number): Promise<Todo> {
    throw new Error('Method not implemented.')
  }
}
```

### Main App

```ts
async function main() {}

main().catch((err) => console.error(err))
```

## Task 4

Ubah menggunakan `Observable` dari soal `Task 3`
