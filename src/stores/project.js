import { defineStore } from 'pinia'
import { projects } from '../mock/project'
import axios from 'axios'
export const useProjectStore = defineStore('project', {
  state: () => ({
    data: [],
    dataActive: 0,
    isLoading: true,
    isGrid: true,
    searchValue: '',
    filterActive: {
      id: 0,
      name: 'All Projects',
    },
    viewActive: 'GRID',
    viewList: ['GRID', 'LIST', 'TABLE'],
    isDesc: true,
    dataLength: [0, 10, 25, 50],
    showDataLength: 10,
    filterList: [
      {
        id: 0,
        name: 'All Projects',
      },
      {
        id: 1,
        name: 'Ongoing',
      },
      {
        id: 2,
        name: 'Completed',
      },
      {
        id: 3,
        name: 'Draft',
      },
    ],
    example2: [
      {
        title: 'Idea',
        projects: [],
      },
      {
        title: 'Ongoing',
        projects: [
          {
            _id: '63e5f35639be52642472614d',
            index: 0,
            guid: '0fa06a50-b141-49bd-875d-fe84493a154b',
            status: 'Ongoing',
            title: 'consectetur laboris',
            image:
              'https://plus.unsplash.com/premium_photo-1668241683760-154febd417ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description:
              'Velit ea qui aute mollit. Ut eiusmod adipisicing enim do cillum sint duis. Ullamco aute cupidatat dolor amet nulla pariatur irure excepteur do Lorem dolore. Minim ut consectetur est ex nostrud eiusmod veniam aliquip sint culpa adipisicing elit incididunt. Eiusmod velit officia incididunt aliquip aliqua aliqua cupidatat. Ex aliqua anim dolor dolore eiusmod id nostrud do reprehenderit.\r\n',
            start_date: '2017-05-15T05:08:07',
            deadline_date: '2022-01-02T02:19:53',
            member: [
              {
                id: 0,
                name: 'Bonner Houston',
              },
              {
                id: 1,
                name: 'Foreman Landry',
              },
              {
                id: 2,
                name: 'Lynn Chang',
              },
              {
                id: 3,
                name: 'Lynn Chang',
              },
              {
                id: 4,
                name: 'Lynn Chang',
              },
            ],
          },
          {
            _id: '63e5f35690ccb858d28a28b9',
            index: 1,
            guid: '18bfeaa7-61ac-47ad-9ee6-a494324b0078',
            status: 'Ongoing',
            title: 'esse officia',
            description:
              'Aliquip labore nisi aliquip cillum dolor commodo duis cillum fugiat minim nulla. Id cillum commodo incididunt aute fugiat. Incididunt do culpa occaecat anim consequat aliqua ad amet aliqua aliqua. Anim nisi esse id enim reprehenderit mollit in non ex commodo reprehenderit Lorem aute. Labore eu eu cupidatat tempor voluptate Lorem nulla elit culpa irure exercitation ipsum id. Aliqua proident qui id Lorem consectetur nisi aute anim cupidatat culpa adipisicing sint proident. Velit in proident ipsum exercitation minim laboris non in dolore.\r\n',
            start_date: '2021-08-10T07:20:59',
            deadline_date: '2023-02-15T23:55:35',
            member: [
              {
                id: 0,
                name: 'Cornelia Mcgee',
              },
              {
                id: 1,
                name: 'Karina Fulton',
              },
              {
                id: 2,
                name: 'May Reid',
              },
            ],
          },
          {
            _id: '63e5f3562f2529b3e9ef668d',
            index: 2,
            guid: '84fcbde0-f51e-4b6c-944b-6d646940062c',
            status: 'Completed',
            title: 'aliqua officia',
            description:
              'Reprehenderit qui eiusmod id tempor consectetur. Eu deserunt enim veniam ullamco Lorem cillum commodo. Sunt fugiat ad occaecat occaecat Lorem adipisicing id ex consectetur ut. Excepteur culpa aliquip do magna laboris excepteur sint eiusmod amet eu. Veniam magna ullamco ut consectetur aliqua.\r\n',
            start_date: '2016-05-29T02:42:20',
            deadline_date: '2016-08-24T04:26:03',
            member: [
              {
                id: 0,
                name: 'Anne Kane',
              },
              {
                id: 1,
                name: 'Pearl Rhodes',
              },
              {
                id: 2,
                name: 'Lambert Reilly',
              },
            ],
          },
        ],
      },
      {
        title: 'In Review',
        projects: [],
      },
      {
        title: 'Completed',
        projects: [
          {
            _id: '63e5f3563bbed99acc5cb1c4',
            index: 7,
            guid: 'c2ca32fe-d40d-4e77-903e-0f96591d14b6',
            status: 'Draft',
            title: 'mollit deserunt',
            description:
              'Dolore non nulla amet eiusmod aliquip ea aute et pariatur exercitation anim consequat sint laboris. Ea quis ullamco irure nostrud minim incididunt. Nisi id laboris ad incididunt amet elit cupidatat fugiat fugiat.\r\n',
            start_date: '2015-07-23T06:02:42',
            deadline_date: '2020-10-27T03:41:55',
            member: [
              {
                id: 0,
                name: 'Reyna Hendricks',
              },
              {
                id: 1,
                name: 'Crawford Koch',
              },
              {
                id: 2,
                name: 'Fisher Ferguson',
              },
            ],
          },
          {
            _id: '63e5f3563d12e952bd13b785',
            index: 8,
            guid: '06a849e8-82e0-4507-bec5-a8dc8b2bf77d',
            status: 'Draft',
            title: 'ipsum excepteur',
            description:
              'Dolore velit nostrud deserunt ex fugiat quis voluptate officia cupidatat. Ipsum est incididunt tempor adipisicing tempor fugiat aute ad id ea adipisicing id in commodo. Dolor sit irure ullamco excepteur sit esse non adipisicing sint veniam.\r\n',
            start_date: '2020-12-29T04:10:09',
            deadline_date: '2021-12-22T08:32:21',
            member: [
              {
                id: 0,
                name: 'Alyssa Moses',
              },
              {
                id: 1,
                name: 'Doreen Lowery',
              },
              {
                id: 2,
                name: 'Hester Dyer',
              },
            ],
          },
          {
            _id: '63e5f356ebc74401851985c4',
            index: 9,
            guid: '0960140b-d75d-4505-995c-2967c716ab0d',
            status: 'Completed',
            title: 'Lorem sit',
            description:
              'Sint consequat sit nisi enim consequat. Reprehenderit magna dolore incididunt voluptate velit culpa cupidatat irure. Commodo nostrud mollit non occaecat eu pariatur occaecat magna occaecat. Eu proident qui qui tempor magna cupidatat esse do sunt commodo duis elit. Nisi ut fugiat cupidatat veniam enim nulla. Officia Lorem nisi occaecat sit proident ullamco duis cillum id incididunt nulla Lorem enim. Elit occaecat enim deserunt esse exercitation veniam ad ea ipsum.\r\n',
            start_date: '2015-11-27T04:05:45',
            deadline_date: '2021-11-13T04:34:29',
            member: [
              {
                id: 0,
                name: 'Erin Ramirez',
              },
              {
                id: 1,
                name: 'Farrell Rush',
              },
              {
                id: 2,
                name: 'Campos Fitzpatrick',
              },
            ],
          },
          {
            _id: '63e5f356a6715d483ba4ba0b',
            index: 10,
            guid: '9e133df3-1b06-40ee-8352-7ea5b485abcd',
            status: 'Draft',
            title: 'nisi ea',
            description:
              'Nisi eu voluptate consequat eiusmod pariatur proident nulla excepteur dolore dolore in in et. Consectetur sit deserunt ea laboris magna velit consectetur incididunt. Nulla anim sunt nisi duis.\r\n',
            start_date: '2019-05-10T04:19:39',
            deadline_date: '2021-05-17T04:19:08',
            member: [
              {
                id: 0,
                name: 'Loretta Riggs',
              },
              {
                id: 1,
                name: 'Medina Sherman',
              },
              {
                id: 2,
                name: 'Beth Park',
              },
            ],
          },
          {
            _id: '63e5f356b83cc22458016c28',
            index: 11,
            guid: '89945cbd-7446-4286-b925-924e881948af',
            status: 'Completed',
            title: 'culpa esse',
            description:
              'Laboris enim non veniam commodo anim est incididunt mollit pariatur adipisicing deserunt aute. Enim cillum dolor aliqua deserunt anim aliqua. Culpa qui mollit anim eiusmod exercitation in. Amet aute pariatur ex laboris ut ullamco aliquip proident. Incididunt ea aliqua officia proident nisi Lorem adipisicing aliquip aute sint mollit enim.\r\n',
            start_date: '2016-02-10T12:09:11',
            deadline_date: '2017-12-25T07:52:46',
            member: [
              {
                id: 0,
                name: 'Darlene Kelly',
              },
              {
                id: 1,
                name: 'Rojas Henry',
              },
              {
                id: 2,
                name: 'Powers Stone',
              },
            ],
          },
          {
            _id: '63e5f356eec4b5ec4fe5e557',
            index: 12,
            guid: 'f19f6e9c-804a-4111-a49e-0cceae52069c',
            status: 'Completed',
            title: 'commodo enim',
            description:
              'Lorem cupidatat ea aliqua Lorem cillum. Minim et ullamco pariatur ex est eu in deserunt dolor veniam esse deserunt. Id sint laboris proident exercitation aliqua fugiat eu. Aute proident fugiat aute et sint in anim ad do ex velit. Pariatur sunt incididunt amet irure. Aliqua excepteur aute non velit. Aliquip minim in do sint fugiat id laboris veniam.\r\n',
            start_date: '2017-12-01T02:59:24',
            deadline_date: '2021-07-27T09:52:38',
            member: [
              {
                id: 0,
                name: 'Polly Bartlett',
              },
              {
                id: 1,
                name: 'Bonita Barrett',
              },
              {
                id: 2,
                name: 'Kelley Sharpe',
              },
            ],
          },
        ],
      },
    ],
  }),
  getters: {
    dataProject: (state) => state.data,
    sortedArray: (state) => {
      let tempData = state.data

      // Process search input
      if (state.searchValue != '' && state.searchValue) {
        tempData = tempData.filter((item) => {
          return item.title.toUpperCase().includes(state.searchValue.toUpperCase())
        })
      }

      // Filter out by cooking time
      if (state.filterActive.id > 0) {
        tempData = tempData.filter((item) => {
          return item.status == state.filterActive.name
        })
      }

      // Show sorted array in descending or ascending order
      if (state.isDesc) {
        tempData.reverse()
      }
      if (state.viewActive == 'TABLE') {
        if (state.showDataLength > 0) {
          return tempData.slice(0, state.showDataLength)
        }
      } else {
        return tempData.slice(0, state.data.length)
      }

      return tempData
    },
    filterItem: (state) => {
      let tempData = state.data

      return (filter) =>
        tempData.filter((item) => {
          return item.status == filter
        })
    },
    projectOn: (state) => {
      return state.data.filter((item) => {
        return item.status == 'Ongoing'
      })
    },
    projectCom: (state) => {
      return state.data.filter((item) => {
        return item.status == 'Completed'
      })
    },
  },
  actions: {
    async getData() {
      this.isLoading = true
      const data = projects
      this.data = data
      setTimeout(() => {
        this.isLoading = false
      }, 200)
    },

    changeStatus(id, status) {
      let index = this.data.findIndex((e) => e._id == id)
      this.data[index].status = status
    },
  },
})
