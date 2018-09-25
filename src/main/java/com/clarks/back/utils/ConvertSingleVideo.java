package com.clarks.back.utils;

import java.io.*;
import java.util.List;

public class ConvertSingleVideo {
      
    private static String mencoder_home = "E:\\mencoder.exe";//mencoder.exe所放的路径  
    //private static String ffmpeg_home = "E:\\ffmpeg.exe";//ffmpeg.exe所放的路径  
      
    public static String inputFile_home = "E:\\needFile\\11111.mp4";//需转换的文件的位置  
    public static String outputFile_home = "E:\\endFile\\253ss33.mp4";//转换后的flv文件所放的文件夹位置  
    
    private static String ffmpeg_linux_home = "/usr/local/tomcat7/temp/ffmpeg";//linux服务器ffmpeg所放的路径  
    
    
    
    private String tempFile_home;//存放rm,rmvb等无法使用ffmpeg直接转换为flv文件先转成的avi文件  
      
    
     public ConvertSingleVideo() {
		super();
	}
	public ConvertSingleVideo(String tempFilePath){  
         this.tempFile_home = tempFilePath;  
     }  
     public static void main(String[] args) {
    	   ConvertSingleVideo convertSingleVideo = new ConvertSingleVideo();
    	   convertSingleVideo.convert(inputFile_home, outputFile_home);
	}
        /**  
         *  功能函数  
         * @param inputFile 待处理视频，需带路径  
         * @param outputFile 处理后视频，需带路径  
         * @return  
         */    
        public boolean convert(String inputFile, String outputFile)    
        {    
            if (!checkfile(inputFile)) {    
               // System.out.println(inputFile + " is not file");    
                return false;    
            }    
            if (process(inputFile,outputFile)) {    
               // System.out.println("ok");    
                return true;    
            }    
            return false;    
        }    
        public boolean convert2(String inputFile, String outputFile)    
        {    
        	if (!checkfile(inputFile)) {    
        	//	System.out.println(inputFile + " is not file");    
        		return false;    
        	}    
        	if (process2(inputFile,outputFile)) {    
        	//	System.out.println("ok");    
        		return true;    
        	}    
        	return false;    
        }    
        //检查文件是否存在    
        private  boolean checkfile(String path) {    
            File file = new File(path);    
            if (!file.isFile()) {    
                return false;    
            }    
            return true;    
        }    
        /**  
         * 转换过程 ：先检查文件类型，在决定调用 processFlv还是processAVI  
         * @param inputFile  
         * @param outputFile  
         * @return  
         */    
        private  boolean process(String inputFile,String outputFile) {    
            int type = checkContentType( inputFile);    
            boolean status = false;    
            if (type == 0) {    
                status = processFLV(inputFile,outputFile);// 直接将文件转为flv文件    
            } else if (type == 1) {    
                String avifilepath = processAVI(type,inputFile);    
                if (avifilepath == null)    
                    return false;// avi文件没有得到    
               status = processFLV(avifilepath,outputFile);// 将avi转为flv    
            }    
            return status;    
        }  
        
        private  boolean process2(String inputFile,String outputFile) {    
        	boolean status = printVideoImg(inputFile,outputFile);// 执行截图
        	return status;    
        }    
        /**  
         * 检查视频类型  
         * @param inputFile  
         * @return ffmpeg 能解析返回0，不能解析返回1  
         */    
        private  int checkContentType(String inputFile) {    
            String type = inputFile.substring(inputFile.lastIndexOf(".") + 1,inputFile.length()).toLowerCase();    
            // ffmpeg能解析的格式：（asx，asf，mpg，wmv，3gp，mp4，mov，avi，flv等）    
            if (type.equals("avi")) {    
                return 0;    
            } else if (type.equals("mpg")) {    
                return 0;    
            } else if (type.equals("wmv")) {    
                return 0;    
            } else if (type.equals("3gp")) {    
                return 0;    
            } else if (type.equals("mov")) {    
                return 0;    
            } else if (type.equals("mp4")) {    
                return 0;    
            } else if (type.equals("asf")) {    
                return 0;    
            } else if (type.equals("asx")) {    
                return 0;    
            } else if (type.equals("flv")) {    
                return 0;    
            }    
            // 对ffmpeg无法解析的文件格式(wmv9，rm，rmvb等),    
            // 可以先用别的工具（mencoder）转换为avi(ffmpeg能解析的)格式.    
            else if (type.equals("wmv9")) {    
                return 1;    
            } else if (type.equals("rm")) {    
                return 1;    
            } else if (type.equals("rmvb")) {    
                return 1;    
            }    
            return 9;    
        }    
        /**  
         *  ffmepg: 能解析的格式：（asx，asf，mpg，wmv，3gp，mp4，mov，avi，flv等）  
         * @param inputFile  
         * @param outputFile  
         * @return  
         * 
         * ffmpeg -i source.avi -f psp -r 29.97 -b 768k -ar 24000 -ab
64k -s 320×240 destination.mp4
         */   
        
        /******linux 下使用ffmpeg命令
         * .//usr/local/tomcat7/temp/ffmpeg
         * -i /usr/local/tomcat7/temp/222.mov
         * -b 768k -ar 24000 -ab 64k -s 750*550 -acodec aac -strict -2 -vcodec h264 -ac 2 -y 
         * /usr/local/tomcat7/temp/1253ss.mp4
         */
        @SuppressWarnings("unused")
		private  boolean processFLV(String inputFile,String outputFile) {    
        	if (!checkfile(inputFile)) {    
            //    System.out.println(inputFile + " is not file");    
                return false;    
            }   
            File file = new File(outputFile);  
            if(file.exists()){  
            //    System.out.println("文件已经存在！无需转换");  
                return true;  
            } else {  
           //     System.out.println("正在转换成mp4文件……");  
                List<String> commend = new java.util.ArrayList<String>();    
                commend.add(ffmpeg_linux_home);  
                commend.add("-i");    
                commend.add(inputFile); 
//                commend.add("-r");    
//                commend.add("29.97"); 
                commend.add("-vf");    
                commend.add("scale=-1:480");    
                commend.add("-b"); 
                commend.add("768k"); 
                commend.add("-ar");    
                commend.add("24000");    
                commend.add("-ab");    
                commend.add("64k"); 
                /*commend.add("-s"); 
                commend.add("750*550"); */
                commend.add("-acodec");    
                commend.add("aac"); 
                commend.add("-strict");
                commend.add("-2");
                commend.add("-vcodec");
                commend.add("h264");
                commend.add("-ac");    
                commend.add("2");    
                commend.add("-y");    
                commend.add(outputFile);    
                StringBuffer test=new StringBuffer();    
                InputStream in = null;  
                for(int i=0;i<commend.size();i++)  {
                	test.append(commend.get(i)+" ");    
                }
           //     System.out.println(test);  
                try { 
                	Process pro = Runtime.getRuntime().exec(test.toString());  
					   pro.waitFor();  
					   in = pro.getInputStream();  
					   BufferedReader read = new BufferedReader(new InputStreamReader(in));  
					   String result = read.readLine();  
				//	   System.out.println("INFO:"+result);  
                    //ProcessBuilder builder = new ProcessBuilder();    
//                    builder.command(commend);    
//                    builder.start();   
                    return true;    
                } catch (Exception e) {    
                    e.printStackTrace();    
                    return false;    
                }    
                 
            }  
            
        }    
         /*private  boolean processFLV(String inputFile,String outputFile) {    
        	if (!checkfile(inputFile)) {    
                System.out.println(inputFile + " is not file");    
                return false;    
            }   
            File file = new File(outputFile);  
            if(file.exists()){  
                System.out.println("文件已经存在！无需转换");  
                return true;  
            } else {  
                System.out.println("正在转换成mp4文件……");  
                  
                List<String> commend = new java.util.ArrayList<String>();    
                //低精度    
                commend.add(ffmpeg_home);  
                commend.add("-i");    
                commend.add(inputFile); 
//                commend.add("-r");    
//                commend.add("29.97");   
                commend.add("-b"); 
                commend.add("768k"); 
                commend.add("-ar");    
                commend.add("24000");    
                commend.add("-ab");    
                commend.add("64k"); 
                commend.add("-s"); 
                commend.add("750*550"); 
                commend.add("-acodec");    
                commend.add("aac"); 
                commend.add("-vcodec");
                commend.add("h264");
                commend.add("-ac");    
                commend.add("2");    
                // 清晰度 -qscale 4 为最好但文件大, -qscale 6就可以了  
                commend.add("-qscale");    
                commend.add("4");    
                commend.add("-y");    
                commend.add(outputFile);    
                StringBuffer test=new StringBuffer();    
                for(int i=0;i<commend.size();i++)    
                    test.append(commend.get(i)+" ");    
                System.out.println(test);    
                try {    
                    ProcessBuilder builder = new ProcessBuilder();    
                    builder.command(commend);    
                    builder.start();   
                    return true;    
                } catch (Exception e) {    
                    e.printStackTrace();    
                    return false;    
                }    
                 
            }  
            
        }    */
       /* private  boolean processFLV(String inputFile,String outputFile) {    
        	if (!checkfile(inputFile)) {    
                System.out.println(inputFile + " is not file");    
                return false;    
            }   
            File file = new File(outputFile);  
            if(file.exists()){  
                System.out.println("文件已经存在！无需转换");  
                return true;  
            } else {  
                System.out.println("正在转换成flv文件……");  
                  
                List<String> commend = new java.util.ArrayList<String>();    
                //低精度    
                commend.add(ffmpeg_home);  
                commend.add("-i");    
                commend.add(inputFile); 
                commend.add("-ab");    
                commend.add("128");    
                commend.add("-acodec");    
                commend.add("aac"); 
                commend.add("-vcodec");
                commend.add("libx264");
                commend.add("-ac");    
                commend.add("2");    
                commend.add("-ar");    
                commend.add("24000");    
                commend.add("-r");    
                commend.add("29.97");   
                // 清晰度 -qscale 4 为最好但文件大, -qscale 6就可以了  
                commend.add("-qscale");    
                commend.add("4");    
                commend.add("-y");    
                commend.add(outputFile);    
                StringBuffer test=new StringBuffer();    
                for(int i=0;i<commend.size();i++)    
                    test.append(commend.get(i)+" ");    
                System.out.println(test);    
                try {    
                    ProcessBuilder builder = new ProcessBuilder();    
                    builder.command(commend);    
                    builder.start();   
                    return true;    
                } catch (Exception e) {    
                    e.printStackTrace();    
                    return false;    
                }    
                 
            }  
             
        }    */
        
        
        /**
         * ffmpeg截图
         *  /usr/local/tomcat7/temp/ffmpeg
         *  -i /usr/local/tomcat7/temp/222.mov
         *  -y -f image2 -t 0.001 -s 352x240
         *  /usr/local/tomcat7/temp/ggga.jpg
         * @param inputFile
         * @param outputFile
         * @return
         */
        @SuppressWarnings("unused")
		private  boolean printVideoImg(String inputFile,String outputFile) {    
        	if (!checkfile(inputFile)) {    
          //      System.out.println(inputFile + " is not file");    
                return false;    
            }   
            File file = new File(outputFile);  
            if(file.exists()){  
          //      System.out.println("文件已经存在！ss");  
                return true;  
            } else {  
           //     System.out.println("正在截图……");  
                List<String> commend = new java.util.ArrayList<String>();    
                commend.add(ffmpeg_linux_home);  
                commend.add("-i");    
                commend.add(inputFile); 
                commend.add("-y"); 
                commend.add("-f"); 
                commend.add("image2");
                commend.add("-ss");
                commend.add("1");
                commend.add("-t");    
                commend.add("0.001");    
                /*commend.add("-s");    
                commend.add("352*240"); */
                commend.add(outputFile);    
                StringBuffer test=new StringBuffer(); 
                InputStream in = null;
                for(int i=0;i<commend.size();i++)    
                    test.append(commend.get(i)+" ");    
           //     System.out.println(test);    
                try {    
                	Process pro = Runtime.getRuntime().exec(test.toString());  
					   pro.waitFor();  
					   in = pro.getInputStream();  
					   BufferedReader read = new BufferedReader(new InputStreamReader(in));  
					   String result = read.readLine();  
			//		   System.out.println("INFO:"+result);  
//                    ProcessBuilder builder = new ProcessBuilder();    
//                    builder.command(commend);    
//                    builder.start();  
                    return true;    
                } catch (Exception e) {    
                    e.printStackTrace();    
                    return false;    
                }    
                 
            }  
            
        }    
        /**  
         * Mencoder:  
         * 对ffmpeg无法解析的文件格式(wmv9，rm，rmvb等),可以先用别的工具（mencoder）转换为avi(ffmpeg能解析的)格式.  
         * @param type  
         * @param inputFile  
         * @return  
         */    
        private  String processAVI(int type,String inputFile) {    
            File file =new File(tempFile_home);    
            if(file.exists()){  
       //         System.out.println("avi文件已经存在！无需转换");  
                return tempFile_home;  
            }    
            List<String> commend = new java.util.ArrayList<String>();    
            commend.add(mencoder_home);    
            commend.add(inputFile);    
            commend.add("-oac");    
            commend.add("mp3lame");    
            commend.add("-lameopts");    
            commend.add("preset=64");    
            commend.add("-ovc");    
            commend.add("xvid");    
            commend.add("-xvidencopts");    
            commend.add("bitrate=600");    
            commend.add("-of");    
            commend.add("avi");    
            commend.add("-o");    
            commend.add(tempFile_home);    
            StringBuffer test=new StringBuffer();    
            for(int i=0;i<commend.size();i++)    
                test.append(commend.get(i)+" ");    
          //  System.out.println(test);    
            try     
            {    
                ProcessBuilder builder = new ProcessBuilder();    
                builder.command(commend);    
                Process p=builder.start();    
                /**  
                 * 清空Mencoder进程 的输出流和错误流  
                 * 因为有些本机平台仅针对标准输入和输出流提供有限的缓冲区大小，  
                 * 如果读写子进程的输出流或输入流迅速出现失败，则可能导致子进程阻塞，甚至产生死锁。   
                 */    
                final InputStream is1 = p.getInputStream();    
                final InputStream is2 = p.getErrorStream();    
                new Thread() {    
                    public void run() {    
                        BufferedReader br = new BufferedReader(new InputStreamReader(is1));    
                        try {    
                            String lineB = null;    
                            while ((lineB = br.readLine()) != null ){    
                                if(lineB != null){
                                	System.out.println(lineB);    
                                }
                            }    
                        } catch (IOException e) {    
                            e.printStackTrace();    
                        }    
                    }    
                }.start();     
                new Thread() {    
                    public void run() {    
                        BufferedReader br2 = new BufferedReader(new InputStreamReader(is2));    
                        try {    
                            String lineC = null;    
                            while ( (lineC = br2.readLine()) != null){    
                                if(lineC != null){
                                	System.out.println(lineC);    
                                }
                            }    
                        } catch (IOException e) {    
                            e.printStackTrace();    
                        }    
                    }    
                }.start();     
                    
                //等Mencoder进程转换结束，再调用ffmpeg进程    
                p.waitFor();    
               //  System.out.println("who cares");    
                return tempFile_home;    
            }catch (Exception e){     
                System.err.println(e);     
                return null;    
            }     
        }    
    }    