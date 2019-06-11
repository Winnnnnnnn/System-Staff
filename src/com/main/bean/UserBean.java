package com.main.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @Author:苏学坤
 * @Date: Create in 1:54 2019/4/18
 * @Description:用户Bean
 */
@Entity
@Table(name="user")
public class UserBean {
    @Id
    private int id;
    private String account;
    private String pwd;
    private String name;
    private int power;
    private String sex;
    private String birthday;
    private String age;
    private String idcard;
    private String addr;

    public UserBean() {
    }

    public UserBean(int id) {
        this.id = id;
    }

    public UserBean(int id, int power) {
        this.id = id;
        this.power = power;
    }

    public UserBean(int id, String account, String pwd, String name, int power, String sex, String birthday, String age, String idcard, String addr) {
        this.id = id;
        this.account = account;
        this.pwd = pwd;
        this.name = name;
        this.power = power;
        this.sex = sex;
        this.birthday = birthday;
        this.age = age;
        this.idcard = idcard;
        this.addr = addr;
    }

    public UserBean(String account, String pwd, String name, int power, String sex, String birthday, String age, String idcard, String addr) {
        this.account = account;
        this.pwd = pwd;
        this.name = name;
        this.power = power;
        this.sex = sex;
        this.birthday = birthday;
        this.age = age;
        this.idcard = idcard;
        this.addr = addr;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }
}
