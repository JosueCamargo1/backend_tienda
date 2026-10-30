const Usuarios = {}

Usuarios.get = (req, res) => {
    res.json({
        msg: "Get - Usuarios"   
    })
};

Usuarios.post = (req, res) => {
    res.json({
        msg: "Post - Usuarios"
    })
};

Usuarios.put = (req, res) => {
    res.json({
        msg: "Put - Usuarios"
    })
};

Usuarios.delete = (req, res) => {
    res.json({
        msg: "Delete - Usuarios"
    })
}; 

export default Usuarios;