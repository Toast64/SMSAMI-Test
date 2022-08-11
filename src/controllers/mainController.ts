//js

export class MainController {
    mainView = (req: any, res: any) => {
        res.render("../views/main", {
        });
    }
    showView = (req: any, res: any) => {
        res.render("../views/showposts", {
        });
    }
    createView = (req: any, res: any) => {
        res.render("../views/createpost", {
        });
    }
    updateView = (req: any, res: any) => {
        res.render("../views/updatepost", {
        });
    }
}