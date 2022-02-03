package controller

import (
	"fmt"
	"net/http"
	"encoding/json"
	"strconv"
	us "github.com/srg/service/user"
	s "github.com/srg/service"

)

var userN = us.NewUser()

func Add(w http.ResponseWriter, r *http.Request) {

	user := us.NewUser()

	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		panic("Error on decode")
	}
	adderr := s.Add(user)

	if adderr != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.WriteHeader(http.StatusCreated)
	
	res := make(map[string]string)
	res["message"] = "it's work"
	json, jsonerr := json.Marshal(res)

	if jsonerr != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.Write(json)
	return 

}

func Update(w http.ResponseWriter, r *http.Request) {



	 params , err := r.URL.Query()["id"]

	 if !err || len(params[0]) < 1 {
			fmt.Println("error on update")
			return 
	 }

	 id,  errId := strconv.Atoi(params[0])

	 if errId != nil {
		 	http.Error(w, errId.Error(), http.StatusInternalServerError)
	 }
	 updaterr := s.Update(userN , id)

	 if updaterr != nil {
		http.Error(w, updaterr.Error(), http.StatusInternalServerError)

	 }
	
}


func Remove(w http.ResponseWriter, r *http.Request) {

	params , err := r.URL.Query()["id"]
	if !err || len(params[0]) < 1 {
		fmt.Println("error on remove")
		return 
	}

	id , errId := strconv.Atoi(params[0])

	if errId != nil {
		panic(err)
	}
	fmt.Println(id)
	s.Remove(userN, id);

}

func Get(w http.ResponseWriter, r *http.Request) {

	// user := c.User{}

	// user.Name = "Lili"

	// res  := crud.Get(1)
	// fmt.Println(res)
	// fmt.Println("get")

}

func GetAll(w http.ResponseWriter, r *http.Request) {
		user := us.NewUser()

		users, err :=  s.GetAll(user)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		fmt.Println(users)
}
