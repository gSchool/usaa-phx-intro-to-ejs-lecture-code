exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Cole Dotson',
          email: 'coledotson@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Pearlie Mcclain',
          email: 'pearliemcclain@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Vega Woodard',
          email: 'vegawoodard@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Pruitt Ortiz',
          email: 'pruittortiz@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Kenya Ewing',
          email: 'kenyaewing@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Cobb Hull',
          email: 'cobbhull@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Sheryl Daugherty',
          email: 'sheryldaugherty@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Maude Floyd',
          email: 'maudefloyd@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Amanda Sherman',
          email: 'amandasherman@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Brennan Walls',
          email: 'brennanwalls@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Dorthy Haney',
          email: 'dorthyhaney@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Gretchen Montgomery',
          email: 'gretchenmontgomery@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Lorna Daniels',
          email: 'lornadaniels@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Bender Mays',
          email: 'bendermays@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Michele Lambert',
          email: 'michelelambert@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Mckee Brooks',
          email: 'mckeebrooks@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Waters Davis',
          email: 'watersdavis@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Diane Jenkins',
          email: 'dianejenkins@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Eaton Rutledge',
          email: 'eatonrutledge@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Lupe Underwood',
          email: 'lupeunderwood@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Garrison Hogan',
          email: 'garrisonhogan@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Estella Hammond',
          email: 'estellahammond@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Klein Curry',
          email: 'kleincurry@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Annette Brennan',
          email: 'annettebrennan@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Elva Mann',
          email: 'elvamann@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Morton Mclaughlin',
          email: 'mortonmclaughlin@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Olivia Cortez',
          email: 'oliviacortez@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Gregory Mckee',
          email: 'gregorymckee@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Angelique Rose',
          email: 'angeliquerose@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Fischer Bender',
          email: 'fischerbender@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Dotson Lane',
          email: 'dotsonlane@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Roach Good',
          email: 'roachgood@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Richard Burnett',
          email: 'richardburnett@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Barbra Callahan',
          email: 'barbracallahan@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Mckenzie Sargent',
          email: 'mckenziesargent@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Lolita Miranda',
          email: 'lolitamiranda@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Haney Brewer',
          email: 'haneybrewer@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Noelle Dale',
          email: 'noelledale@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Gilbert Cannon',
          email: 'gilbertcannon@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Dawson Galloway',
          email: 'dawsongalloway@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Gilmore Ashley',
          email: 'gilmoreashley@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Mcconnell Barnes',
          email: 'mcconnellbarnes@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Millie Johns',
          email: 'milliejohns@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Charlene Tucker',
          email: 'charlenetucker@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Cunningham Reeves',
          email: 'cunninghamreeves@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Brigitte Townsend',
          email: 'brigittetownsend@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Karyn Henderson',
          email: 'karynhenderson@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Alice Moore',
          email: 'alicemoore@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Neal Chase',
          email: 'nealchase@ultrasure.com',
          password: 'hello'
        },
        {
          name: 'Janis Irwin',
          email: 'janisirwin@ultrasure.com',
          password: 'hello'
        }
      ])
    })
}
