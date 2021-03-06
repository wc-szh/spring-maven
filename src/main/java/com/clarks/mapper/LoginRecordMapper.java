package com.clarks.mapper;

import com.clarks.pojo.LoginRecord;
import com.clarks.pojo.LoginRecordExample;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface LoginRecordMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int countByExample(LoginRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int deleteByExample(LoginRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int insert(LoginRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int insertSelective(LoginRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    List<LoginRecord> selectByExample(LoginRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    LoginRecord selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByExampleSelective(@Param("record") LoginRecord record, @Param("example") LoginRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByExample(@Param("record") LoginRecord record, @Param("example") LoginRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByPrimaryKeySelective(LoginRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_login_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByPrimaryKey(LoginRecord record);
}