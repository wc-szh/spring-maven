package com.clarks.back.utils;


import ws.schild.jave.*;
import java.io.File;

/**
 * 音频和视频转换工具类
 * @author admin
 *
 */
public class ToMp3Utils {

	/**
	 * 其他格式转MP3
	 * @param sourcePath
	 * @param targetPath
	 */
	 public static void changeToMp3(String sourcePath, String targetPath) {
        File source = new File(sourcePath);
//        MultimediaObject source = new MultimediaObject();
		File target = new File(targetPath);
		AudioAttributes audio = new AudioAttributes();
        audio.setCodec("libmp3lame");
        audio.setBitRate(new Integer(128000));
        audio.setChannels(new Integer(2));
        audio.setVolume(new Integer(500));
        audio.setSamplingRate(new Integer(44100));
        EncodingAttributes attrs = new EncodingAttributes();
        attrs.setFormat("mp3");
        attrs.setAudioAttributes(audio);
		Encoder encoder = new Encoder();
		try {
			encoder.encode(new MultimediaObject(source), target, attrs);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (InputFormatException e) {
			e.printStackTrace();
		} catch (EncoderException e) {
			e.printStackTrace();
		}
	  }
	 /**
	  * 转MP4
	  * @param sourcePath
	  * @param targetPath
	  */
	 public static void changeToMp4(String sourcePath, String targetPath) {
		 try {
		 File source = new File(sourcePath);
		 File target = new File(targetPath);
	//	 System.out.println("changeToMp4|||||||sourcePath="+sourcePath+",,,,targetPath="+targetPath);
		 if(!source.exists()){
	//		 System.out.println("源文件不存在，，，，"+sourcePath);
		 }
		 AudioAttributes audio = new AudioAttributes();
		 audio.setCodec("libvorbis");
		 VideoAttributes video = new VideoAttributes();
		 video.setCodec("mpeg4");
		 video.setTag("DIVX");
		 video.setBitRate(new Integer(160000));
		 video.setFrameRate(new Integer(30));
		 EncodingAttributes attrs = new EncodingAttributes();
		 attrs.setFormat("mpegvideo");
		 attrs.setAudioAttributes(audio);
		 attrs.setVideoAttributes(video);
		 Encoder encoder = new Encoder();
			 encoder.encode(new MultimediaObject(source), target, attrs);
		//	 System.out.println("这就走完了啊  ？？？！！！");
		 } catch (IllegalArgumentException e) {
			 e.printStackTrace();
		 } catch (InputFormatException e) {
			 e.printStackTrace();
		 } catch (EncoderException e) {
			 e.printStackTrace();
		 }catch (Exception e) {
			 e.printStackTrace();
		 }
	 }




}
