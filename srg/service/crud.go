package service

import (
	c "github.com/srg/contract"
	us "github.com/srg/service/user"
)




func Add(c c.Crud) error {
		return c.Add()
}

func Update(c c.Crud, id int) error {
	 return  c.Update(id)
}


func Remove(c c.Crud,id int) error {
	return  c.Remove(id)

}

func Get(c c.Crud,id int)  (us.User, error) {
	return c.Get(id)

}

func GetAll(c c.Crud) ([]us.User, error) {
	return c.GetAll()
}
