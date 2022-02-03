package service

import (
	"testing"

)


func TestNewUser(t *testing.T){
	user := NewUser()
	if user == nil {
			t.Error("user not created")
	}
}

func TestAdd(t *testing.T) {
	user := NewUser()

	user.Name = "Lili"
	user.Age = 22
	user.Student = true

	err := user.Add()

	if err != nil {
		t.Error("not new User")
	}

	db = nil
}

func TestUpdate(t *testing.T) {
	user := User{Id: 0, Name: "Lili", Age: 22, Student: true}

	db = append(db, user)

	updateUser := User{Id: 0, Name: "Thomas", Age: 22, Student: true}

	updateUser.Update(0)

	if db[0].Name != updateUser.Name {
		t.Error("error on Update")
	}

	db = nil
}
func TestUpdateOnError(t *testing.T) {

	user := User{}

	err := user.Update(10)

	if err == nil && err.Error() == "error on update" {
			t.Error("error on update")	
	}

	db = nil

}

func TestRemove(t *testing.T) {
	user := User{Id: 0, Name: "Lili", Age: 22, Student: true}

	ancien := len(db)
	db = append(db, user)
	user.Remove(0)

	if ancien > len(db) {
		t.Error("error on remove")
	} 
	db = nil
}

func TestGet(t *testing.T) {
	user := []User{
		User{Id: 0, Name: "Lili", Age: 22, Student: true},
		User{Id: 1, Name: "Lilo", Age: 22, Student: true},
		User{Id: 2, Name: "Lilz", Age: 22, Student: true},
	}

	findUser := NewUser()
	db = append(db, user[0])
	db = append(db, user[1])
	db = append(db, user[2])

	find, err :=  findUser.Get(0)

	if err != nil && find.Name != findUser.Name {
			t.Error("error in Get")
	}

	db = nil
}

func TestGetOnError(t *testing.T) {

	user := User{}

	_, err := user.Get(10)

	if err != nil {
		t.Error("error in get")

	}
	db = nil
}

func TestGetAll(t *testing.T) {
	user := []User{
		User{Id: 0, Name: "Lili", Age: 22, Student: true},
		User{Id: 1, Name: "Lilo", Age: 22, Student: true},
		User{Id: 2, Name: "Lilz", Age: 22, Student: true},
	}

	db = append(db, user[0])
	db = append(db, user[1])
	db = append(db, user[2])

	getAllUser := NewUser()
	_, err := getAllUser.GetAll()

	if err != nil {
		t.Error("error in get All")
	}
}

