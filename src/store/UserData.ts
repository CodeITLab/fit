import { IUser } from "@/models/IUser";
import { defineStore } from "pinia";

export const useUserDataStore = defineStore('user', {
    state: () => {
        return {
            defaultUserData: {
                name: "",
                lastName: "",
                email: "",
                picture:"",
                isAuth: false,
                userType: ""
            },
            userId: 0,
        }
        
    },
    getters: {
        getUserInfo(state){
            return state.defaultUserData;
        },
        getUserId(state) {
            return state.userId;
        }
    },
    actions: {
        updateUserType(userType: string) {
            this.defaultUserData.userType = userType
        },
        updateUserInfo(userData: IUser){
            this.defaultUserData.name = userData.name
            this.defaultUserData.picture = userData.picture
        },
        initData(isAuthenthicated: boolean) {
            this.defaultUserData.isAuth = isAuthenthicated
        },
        setUserId(userId: number) {
            this.userId = userId;
        }
    }
})
