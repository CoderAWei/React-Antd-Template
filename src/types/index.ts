// 声明类型的文件

export interface IRouterMap {
    path: string,
    auth: number, // 是否需要鉴权
	title: string,
    key: string, // 与path保持一致
    element: any,
    hidden?: boolean, // 是否显示在菜单上
    children? : IChildRouterMap[]
}

export interface IChildRouterMap extends IRouterMap {
    parentpath: string // 父级路径 用于面包屑和回显两个逻辑 如果是三级菜单 那么parentpath = /一级路径/二级路径 以此类推
}

export interface IBreadCrumbs {
	title: string,
	path?: string
}
