import { createSlice} from '@reduxjs/toolkit'

const tabslice = createSlice({
    name: 'tab',
    initialState:{
        isCollapse: false,
        tabList: [
            {
                path: '/',
                name: 'home',
                label: '首页'
            }
        ],
        currentMenu:{}
    },
    reducers: {
        collapseMenu: state => {
            state.isCollapse = !state.isCollapse
        },
        selectMenuList: (state,{payload: val}) => {
            if (val.name !== 'home') {
                state.currentMenu = val
                //去除点如果已经存在的tag, 就不需要添加
                const result = state.tabList.findIndex(item => item.name === val.name)
                if (result === -1){
                    state.tabList.push(val)
                }
            } else if (val.name === 'home' && state.tabList.length === 1) {
                state.currentMenu = {}
            }

        },
        closeTab:(state, {payload:val}) => {
            let res = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(res, 1)

        },
        setCurrentMenu: (state, {payload: val}) => {
            if (val.name === 'home') {
                state.currentMenu = {}
            } else {
                state.currentMenu = val
            }

        },
       
    }
})

export const { collapseMenu, selectMenuList, closeTab, setCurrentMenu} = tabslice.actions
export default tabslice.reducer
