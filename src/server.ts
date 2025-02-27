import express, { Router } from 'express';
//import path from 'path';

interface Options {
    port: number;
    router: Router;
    public_path?: string;
}
export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly router: Router;

    constructor(options: Options) {
        const { port, router, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
        this.router = router;
    }

    async start() {
        //Midelwares
        this.app.use(express.json());

        //Public folder
        /* this.app.use(express.static(this.publicPath));

        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
        }); */

        // Server config
        this.app.use(this.router)

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });

    }
}