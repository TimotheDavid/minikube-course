package service 


import (
		"errors"
)

type User struct {
	Id      int
	Name    string
	Age     int
	Student bool
}


var db []User


func NewUser() *User {
	return new(User)
}


func (u User) Add() error  {
		id  := len(db)
		u.Id = id
		db = append(db, u)
		return nil

}

func (u User) Update(id int) error {
	if  id > len(db) {
		return errors.New("error on update")
	}

	if  id < len(db) {
		db[id] = u 
	}

	return nil
}

func (u User) Remove(id int) error {
	RemoveUser(&db, id)
	return nil
}

func (u User) Get(id int) (User, error) {

	if id > len(db) {
		return u, errors.New("error in get")
	}

	user := FindUser(db , id)
	return user, nil


}

func (u User) GetAll() ([]User, error) {

	return db, nil	

}

