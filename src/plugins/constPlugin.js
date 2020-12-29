const Variables = {
    idRoleGH: '/api/roles/1'
};

Variables.install = function (Vue) {
    Vue.prototype.$getConst = (key) => {
        return Variables[key];
    }
};

export default Variables;