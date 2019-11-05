exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('todos').insert([
        {
          title: 'anim do nisi sunt',
          completed: true,
          user_id: 9
        },
        {
          title: 'laborum veniam ullamco consectetur',
          completed: true,
          user_id: 34
        },
        {
          title: 'ipsum cupidatat anim irure',
          completed: false,
          user_id: 38
        },
        {
          title: 'ullamco labore dolore quis',
          completed: true,
          user_id: 36
        },
        {
          title: 'labore ea reprehenderit dolore',
          completed: false,
          user_id: 24
        },
        {
          title: 'occaecat tempor sunt sit',
          completed: true,
          user_id: 47
        },
        {
          title: 'deserunt non anim sit',
          completed: true,
          user_id: 9
        },
        {
          title: 'eiusmod cupidatat commodo aliqua',
          completed: false,
          user_id: 34
        },
        {
          title: 'consequat esse duis voluptate',
          completed: true,
          user_id: 4
        },
        {
          title: 'ad consequat in minim',
          completed: false,
          user_id: 3
        },
        {
          title: 'non pariatur duis aute',
          completed: false,
          user_id: 42
        },
        {
          title: 'ad sint dolore aute',
          completed: true,
          user_id: 36
        },
        {
          title: 'aliquip fugiat mollit cupidatat',
          completed: true,
          user_id: 49
        },
        {
          title: 'mollit et nostrud duis',
          completed: false,
          user_id: 16
        },
        {
          title: 'laboris deserunt voluptate ad',
          completed: true,
          user_id: 18
        },
        {
          title: 'irure laborum ipsum anim',
          completed: false,
          user_id: 26
        },
        {
          title: 'ullamco irure enim adipisicing',
          completed: true,
          user_id: 2
        },
        {
          title: 'cillum ex in cillum',
          completed: false,
          user_id: 28
        },
        {
          title: 'Lorem ea et Lorem',
          completed: false,
          user_id: 30
        },
        {
          title: 'ipsum nostrud enim occaecat',
          completed: true,
          user_id: 39
        },
        {
          title: 'enim eiusmod adipisicing magna',
          completed: false,
          user_id: 6
        },
        {
          title: 'exercitation proident ut fugiat',
          completed: false,
          user_id: 44
        },
        {
          title: 'qui quis quis sint',
          completed: false,
          user_id: 45
        },
        {
          title: 'quis ipsum amet proident',
          completed: true,
          user_id: 6
        },
        {
          title: 'ullamco cillum laboris aute',
          completed: true,
          user_id: 43
        },
        {
          title: 'labore ea enim exercitation',
          completed: false,
          user_id: 29
        },
        {
          title: 'voluptate amet do non',
          completed: false,
          user_id: 13
        },
        {
          title: 'minim Lorem elit non',
          completed: true,
          user_id: 13
        },
        {
          title: 'sunt labore magna occaecat',
          completed: false,
          user_id: 1
        },
        {
          title: 'dolor pariatur mollit reprehenderit',
          completed: false,
          user_id: 47
        },
        {
          title: 'quis cupidatat sunt aliqua',
          completed: false,
          user_id: 7
        },
        {
          title: 'eu duis quis labore',
          completed: false,
          user_id: 27
        },
        {
          title: 'irure cupidatat aliqua officia',
          completed: true,
          user_id: 46
        },
        {
          title: 'ullamco veniam consequat deserunt',
          completed: false,
          user_id: 26
        },
        {
          title: 'magna amet irure aute',
          completed: true,
          user_id: 7
        },
        {
          title: 'sint culpa enim in',
          completed: true,
          user_id: 48
        },
        {
          title: 'nostrud et nisi incididunt',
          completed: true,
          user_id: 21
        },
        {
          title: 'cupidatat et tempor consequat',
          completed: true,
          user_id: 21
        },
        {
          title: 'reprehenderit ea nulla incididunt',
          completed: true,
          user_id: 42
        },
        {
          title: 'et amet deserunt cupidatat',
          completed: true,
          user_id: 30
        },
        {
          title: 'quis nulla elit labore',
          completed: false,
          user_id: 48
        },
        {
          title: 'ex aliqua ea voluptate',
          completed: true,
          user_id: 14
        },
        {
          title: 'consectetur occaecat voluptate nulla',
          completed: false,
          user_id: 24
        },
        {
          title: 'dolore laborum nisi do',
          completed: false,
          user_id: 3
        },
        {
          title: 'Lorem nisi deserunt et',
          completed: true,
          user_id: 25
        },
        {
          title: 'aute consectetur excepteur ipsum',
          completed: false,
          user_id: 3
        },
        {
          title: 'aliquip exercitation id tempor',
          completed: true,
          user_id: 10
        },
        {
          title: 'dolor occaecat ea cillum',
          completed: true,
          user_id: 11
        },
        {
          title: 'adipisicing amet fugiat enim',
          completed: true,
          user_id: 44
        },
        {
          title: 'minim ipsum ex sit',
          completed: true,
          user_id: 7
        },
        {
          title: 'sint sit eu adipisicing',
          completed: true,
          user_id: 34
        },
        {
          title: 'consectetur irure in exercitation',
          completed: false,
          user_id: 17
        },
        {
          title: 'amet laborum ut aliqua',
          completed: true,
          user_id: 19
        },
        {
          title: 'sit irure nostrud commodo',
          completed: false,
          user_id: 34
        },
        {
          title: 'ad tempor labore esse',
          completed: false,
          user_id: 20
        },
        {
          title: 'veniam consequat aute consectetur',
          completed: false,
          user_id: 17
        },
        {
          title: 'id in cillum id',
          completed: true,
          user_id: 30
        },
        {
          title: 'adipisicing non consequat consequat',
          completed: false,
          user_id: 1
        },
        {
          title: 'mollit esse culpa commodo',
          completed: false,
          user_id: 35
        },
        {
          title: 'consequat ipsum fugiat aliquip',
          completed: true,
          user_id: 41
        },
        {
          title: 'occaecat et dolore eiusmod',
          completed: true,
          user_id: 1
        },
        {
          title: 'et commodo ipsum laborum',
          completed: true,
          user_id: 30
        },
        {
          title: 'excepteur fugiat cillum minim',
          completed: true,
          user_id: 37
        },
        {
          title: 'id dolor qui dolor',
          completed: false,
          user_id: 43
        },
        {
          title: 'irure eu Lorem incididunt',
          completed: false,
          user_id: 31
        },
        {
          title: 'aliquip mollit labore velit',
          completed: false,
          user_id: 43
        },
        {
          title: 'nisi in cillum anim',
          completed: false,
          user_id: 49
        },
        {
          title: 'labore officia exercitation laborum',
          completed: false,
          user_id: 24
        },
        {
          title: 'enim Lorem elit consequat',
          completed: true,
          user_id: 18
        },
        {
          title: 'sint consectetur velit consequat',
          completed: false,
          user_id: 49
        },
        {
          title: 'id commodo tempor do',
          completed: true,
          user_id: 11
        },
        {
          title: 'labore occaecat excepteur consequat',
          completed: false,
          user_id: 12
        },
        {
          title: 'quis velit non ullamco',
          completed: false,
          user_id: 28
        },
        {
          title: 'qui ipsum proident nostrud',
          completed: false,
          user_id: 24
        },
        {
          title: 'mollit ea nulla do',
          completed: false,
          user_id: 31
        },
        {
          title: 'qui aliqua nostrud reprehenderit',
          completed: false,
          user_id: 40
        },
        {
          title: 'elit Lorem ullamco sint',
          completed: false,
          user_id: 21
        },
        {
          title: 'ea nulla consectetur aute',
          completed: true,
          user_id: 23
        },
        {
          title: 'sint eu aliquip do',
          completed: true,
          user_id: 12
        },
        {
          title: 'pariatur ea mollit cupidatat',
          completed: false,
          user_id: 39
        },
        {
          title: 'aliqua fugiat quis qui',
          completed: false,
          user_id: 36
        },
        {
          title: 'pariatur sit proident voluptate',
          completed: false,
          user_id: 32
        },
        {
          title: 'ea commodo laborum reprehenderit',
          completed: false,
          user_id: 47
        },
        {
          title: 'sint ut culpa non',
          completed: false,
          user_id: 22
        },
        {
          title: 'culpa aliqua laborum pariatur',
          completed: true,
          user_id: 26
        },
        {
          title: 'labore irure sunt deserunt',
          completed: true,
          user_id: 11
        },
        {
          title: 'irure laborum commodo velit',
          completed: false,
          user_id: 21
        },
        {
          title: 'exercitation minim proident ad',
          completed: false,
          user_id: 21
        },
        {
          title: 'irure ad sunt occaecat',
          completed: false,
          user_id: 42
        },
        {
          title: 'mollit laboris laborum fugiat',
          completed: false,
          user_id: 14
        },
        {
          title: 'magna ut deserunt dolore',
          completed: false,
          user_id: 16
        },
        {
          title: 'minim fugiat do irure',
          completed: false,
          user_id: 38
        },
        {
          title: 'irure officia velit commodo',
          completed: true,
          user_id: 32
        },
        {
          title: 'velit consectetur quis ea',
          completed: true,
          user_id: 16
        },
        {
          title: 'elit ullamco cillum tempor',
          completed: true,
          user_id: 22
        },
        {
          title: 'amet laborum reprehenderit dolore',
          completed: false,
          user_id: 24
        },
        {
          title: 'sit ullamco ad velit',
          completed: true,
          user_id: 36
        },
        {
          title: 'quis nulla dolore veniam',
          completed: true,
          user_id: 7
        },
        {
          title: 'aliqua deserunt dolor duis',
          completed: true,
          user_id: 45
        },
        {
          title: 'laboris enim ea non',
          completed: false,
          user_id: 37
        },
        {
          title: 'nulla consectetur sint ut',
          completed: false,
          user_id: 48
        },
        {
          title: 'commodo anim ut fugiat',
          completed: false,
          user_id: 48
        },
        {
          title: 'adipisicing ad sint elit',
          completed: true,
          user_id: 3
        },
        {
          title: 'reprehenderit ea amet tempor',
          completed: false,
          user_id: 3
        },
        {
          title: 'cupidatat deserunt cillum consectetur',
          completed: false,
          user_id: 6
        },
        {
          title: 'tempor dolore sunt nostrud',
          completed: true,
          user_id: 16
        },
        {
          title: 'elit magna aliqua do',
          completed: true,
          user_id: 2
        },
        {
          title: 'dolore duis sint do',
          completed: true,
          user_id: 47
        },
        {
          title: 'qui officia consequat eiusmod',
          completed: false,
          user_id: 31
        },
        {
          title: 'do proident magna enim',
          completed: false,
          user_id: 44
        },
        {
          title: 'fugiat duis velit occaecat',
          completed: true,
          user_id: 1
        },
        {
          title: 'do qui dolore irure',
          completed: true,
          user_id: 39
        },
        {
          title: 'officia irure exercitation qui',
          completed: true,
          user_id: 24
        },
        {
          title: 'ad cillum est duis',
          completed: true,
          user_id: 10
        },
        {
          title: 'exercitation amet qui ea',
          completed: true,
          user_id: 2
        },
        {
          title: 'fugiat ex exercitation deserunt',
          completed: false,
          user_id: 37
        },
        {
          title: 'sint non elit ex',
          completed: true,
          user_id: 13
        },
        {
          title: 'magna esse est do',
          completed: false,
          user_id: 10
        },
        {
          title: 'et sit occaecat reprehenderit',
          completed: false,
          user_id: 32
        },
        {
          title: 'aute sunt duis et',
          completed: true,
          user_id: 21
        },
        {
          title: 'minim ipsum laborum eiusmod',
          completed: false,
          user_id: 26
        },
        {
          title: 'eu officia ut quis',
          completed: true,
          user_id: 13
        },
        {
          title: 'nostrud sunt veniam eu',
          completed: false,
          user_id: 2
        },
        {
          title: 'ex dolor sint amet',
          completed: true,
          user_id: 10
        },
        {
          title: 'velit et incididunt incididunt',
          completed: false,
          user_id: 24
        },
        {
          title: 'Lorem occaecat amet consectetur',
          completed: false,
          user_id: 20
        },
        {
          title: 'tempor consequat voluptate do',
          completed: true,
          user_id: 6
        },
        {
          title: 'do ipsum tempor sit',
          completed: true,
          user_id: 45
        },
        {
          title: 'excepteur mollit mollit incididunt',
          completed: false,
          user_id: 44
        },
        {
          title: 'culpa adipisicing aliqua irure',
          completed: true,
          user_id: 32
        },
        {
          title: 'aliquip tempor dolore esse',
          completed: true,
          user_id: 10
        },
        {
          title: 'quis incididunt excepteur esse',
          completed: true,
          user_id: 15
        },
        {
          title: 'duis dolor adipisicing consectetur',
          completed: false,
          user_id: 19
        },
        {
          title: 'quis fugiat commodo in',
          completed: false,
          user_id: 18
        },
        {
          title: 'id nostrud cillum nulla',
          completed: false,
          user_id: 22
        },
        {
          title: 'nulla tempor duis ipsum',
          completed: true,
          user_id: 33
        },
        {
          title: 'nisi et id consequat',
          completed: false,
          user_id: 22
        },
        {
          title: 'sunt ipsum exercitation adipisicing',
          completed: true,
          user_id: 14
        },
        {
          title: 'qui pariatur culpa tempor',
          completed: true,
          user_id: 48
        },
        {
          title: 'do aliquip ad sit',
          completed: true,
          user_id: 45
        },
        {
          title: 'elit velit culpa nulla',
          completed: false,
          user_id: 2
        },
        {
          title: 'officia labore velit sint',
          completed: true,
          user_id: 17
        },
        {
          title: 'eiusmod officia deserunt labore',
          completed: false,
          user_id: 4
        },
        {
          title: 'enim deserunt mollit anim',
          completed: true,
          user_id: 42
        },
        {
          title: 'dolor officia deserunt eu',
          completed: false,
          user_id: 10
        },
        {
          title: 'nisi Lorem laboris pariatur',
          completed: true,
          user_id: 13
        },
        {
          title: 'sint commodo occaecat id',
          completed: true,
          user_id: 7
        },
        {
          title: 'ullamco pariatur proident aliqua',
          completed: false,
          user_id: 41
        },
        {
          title: 'sunt cillum sit cillum',
          completed: false,
          user_id: 15
        },
        {
          title: 'officia sint incididunt enim',
          completed: true,
          user_id: 27
        },
        {
          title: 'tempor aliquip culpa nulla',
          completed: false,
          user_id: 10
        },
        {
          title: 'deserunt quis aliquip qui',
          completed: true,
          user_id: 47
        },
        {
          title: 'elit sint consequat deserunt',
          completed: true,
          user_id: 8
        },
        {
          title: 'cillum commodo laborum duis',
          completed: true,
          user_id: 1
        },
        {
          title: 'consectetur Lorem qui cupidatat',
          completed: true,
          user_id: 34
        },
        {
          title: 'anim culpa culpa pariatur',
          completed: false,
          user_id: 17
        },
        {
          title: 'non pariatur incididunt nisi',
          completed: true,
          user_id: 17
        },
        {
          title: 'velit consequat eu reprehenderit',
          completed: false,
          user_id: 48
        },
        {
          title: 'cupidatat cupidatat qui commodo',
          completed: false,
          user_id: 15
        },
        {
          title: 'incididunt officia incididunt est',
          completed: false,
          user_id: 26
        },
        {
          title: 'veniam proident velit duis',
          completed: true,
          user_id: 19
        },
        {
          title: 'tempor voluptate sint sunt',
          completed: false,
          user_id: 27
        },
        {
          title: 'est voluptate sint cupidatat',
          completed: false,
          user_id: 19
        },
        {
          title: 'adipisicing elit amet reprehenderit',
          completed: false,
          user_id: 9
        },
        {
          title: 'culpa ex ea aliquip',
          completed: true,
          user_id: 35
        },
        {
          title: 'magna aliquip non aliquip',
          completed: true,
          user_id: 50
        },
        {
          title: 'excepteur nulla ut velit',
          completed: true,
          user_id: 5
        },
        {
          title: 'laborum aliqua ut esse',
          completed: false,
          user_id: 32
        },
        {
          title: 'quis ullamco anim amet',
          completed: true,
          user_id: 13
        },
        {
          title: 'labore exercitation nisi eu',
          completed: false,
          user_id: 16
        },
        {
          title: 'excepteur dolor occaecat aliqua',
          completed: true,
          user_id: 14
        },
        {
          title: 'ut non occaecat enim',
          completed: false,
          user_id: 36
        },
        {
          title: 'proident labore incididunt tempor',
          completed: true,
          user_id: 49
        },
        {
          title: 'culpa nostrud non proident',
          completed: false,
          user_id: 3
        },
        {
          title: 'aliquip ex consectetur eu',
          completed: true,
          user_id: 49
        },
        {
          title: 'ex duis pariatur qui',
          completed: true,
          user_id: 16
        },
        {
          title: 'mollit occaecat sint sit',
          completed: false,
          user_id: 40
        },
        {
          title: 'dolor do labore quis',
          completed: false,
          user_id: 23
        },
        {
          title: 'tempor ullamco qui reprehenderit',
          completed: true,
          user_id: 16
        },
        {
          title: 'elit pariatur ex quis',
          completed: true,
          user_id: 14
        },
        {
          title: 'ipsum magna Lorem commodo',
          completed: false,
          user_id: 39
        },
        {
          title: 'labore ea eiusmod do',
          completed: false,
          user_id: 46
        },
        {
          title: 'aliquip dolore in aliqua',
          completed: false,
          user_id: 25
        },
        {
          title: 'amet velit sit laborum',
          completed: false,
          user_id: 10
        },
        {
          title: 'adipisicing mollit voluptate fugiat',
          completed: true,
          user_id: 6
        },
        {
          title: 'quis occaecat ut dolor',
          completed: false,
          user_id: 34
        },
        {
          title: 'cupidatat anim culpa elit',
          completed: false,
          user_id: 42
        },
        {
          title: 'laboris do veniam irure',
          completed: false,
          user_id: 26
        },
        {
          title: 'dolore sunt sit commodo',
          completed: false,
          user_id: 43
        },
        {
          title: 'commodo deserunt fugiat pariatur',
          completed: true,
          user_id: 26
        },
        {
          title: 'quis anim laborum labore',
          completed: true,
          user_id: 16
        },
        {
          title: 'dolore proident ad commodo',
          completed: true,
          user_id: 16
        },
        {
          title: 'officia eu elit est',
          completed: false,
          user_id: 40
        },
        {
          title: 'aute fugiat nisi adipisicing',
          completed: false,
          user_id: 16
        },
        {
          title: 'occaecat voluptate irure esse',
          completed: true,
          user_id: 2
        },
        {
          title: 'culpa ea irure officia',
          completed: true,
          user_id: 37
        },
        {
          title: 'ullamco dolore enim eiusmod',
          completed: false,
          user_id: 28
        },
        {
          title: 'est eu sint aliqua',
          completed: true,
          user_id: 44
        },
        {
          title: 'et culpa aliqua cupidatat',
          completed: false,
          user_id: 20
        },
        {
          title: 'ullamco pariatur deserunt labore',
          completed: true,
          user_id: 3
        }
      ])
    })
}
