package main

import (
	"net/http"
	"log"
	c "github.com/srg/controller"

)

func main() {


	mux := http.NewServeMux()
	// mux.HandleFunc("/login", login)
	// mux.HandleFunc("/register", register)
	mux.HandleFunc("/add", c.Add)
	mux.HandleFunc("/update", c.Update)
	mux.HandleFunc("/remove", c.Remove)
	mux.HandleFunc("/get", c.Get)
	mux.HandleFunc("/getAll", c.GetAll)
	log.Println("Server Listening on port", ":8000")
	log.Fatal(http.ListenAndServe(":8000", mux))


}
