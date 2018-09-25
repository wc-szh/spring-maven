package com.clarks.mapper;

import com.clarks.pojo.PrizeRecord;
import com.clarks.pojo.PrizeRecordExample;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface PrizeRecordMapper {
	
	//多表查询(中奖纪录)
	List<PrizeRecord> selectPrizeRecord(@Param("prizeLevel") Integer prizeLevel, @Param("nickName") String nickName, @Param("isGet") Integer isGet);
	
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int countByExample(PrizeRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int deleteByExample(PrizeRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int insert(PrizeRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int insertSelective(PrizeRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    List<PrizeRecord> selectByExample(PrizeRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    PrizeRecord selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByExampleSelective(@Param("record") PrizeRecord record, @Param("example") PrizeRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByExample(@Param("record") PrizeRecord record, @Param("example") PrizeRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByPrimaryKeySelective(PrizeRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table c_prize_record
     *
     * @mbggenerated Tue Aug 14 15:34:55 CST 2018
     */
    int updateByPrimaryKey(PrizeRecord record);
}