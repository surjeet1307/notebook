import Notecontext from "./Notecontext";

let Notestate=(props)=>{
    let state=[
        {
            "_id": "62e2286b76cbd4dd190dd62e",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update1",
            "description": "My name is Surjeet singh",
            "tag": "name",
            "date": "2022-07-28T06:10:51.549Z",
            "__v": 0
        },
        {
            "_id": "62e369968b14dcfd6b2e46d7",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update5",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:10.032Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        },
        {
            "_id": "62e3699e8b14dcfd6b2e46d9",
            "user": "62db94d5dad3cb43f6db06c4",
            "title": "Hello update7",
            "description": "My name is Surjeet singh",
            "tag": "Genral",
            "date": "2022-07-29T05:01:18.743Z",
            "__v": 0
        }
    ]

    return (
        <Notecontext.Provider value={state}>
        {props.children}
        </Notecontext.Provider>
    )
}
export default Notestate