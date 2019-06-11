package com.main.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @Author: 苏学坤
 * @Date: Create in 1:58 2019/4/18
 * @Description: 工作日志Bean
 */
@Entity
@Table(name="journal")
public class JournalBean {
    @Id
    private int id;
    private String detail;
    private int type;
    private String time;
    private int user;
    private int state;

    public JournalBean() {
    }

    public JournalBean(String detail, int type, String time, int user) {
        this.detail = detail;
        this.type = type;
        this.time = time;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
