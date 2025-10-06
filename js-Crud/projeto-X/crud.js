import connection from './bd.js'

export class Crud {

   //Método - seleção
   async inserir() {
	let conn = await connection()
	try {	
	let [row] = conn.query('select * from paciente')
	console.log('Pacientes cadastrados!' + rows)
	
	} cath (error) {
	    console.error('erro de seleção')
	    conn.end()
	}
   }


}