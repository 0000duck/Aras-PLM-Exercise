//Creator:Panda
//Name:AutoNumberingAction
//Type:JavaScript
//Event:[Action_name bcs_AutoNumberingGet]=>  item
//Comments:v0.1 Developed By Panda 2016/12/15
//�ت�:���o�⸹�W�h�A�åB�̾�Itemtype��쪺iq_temprary_preamble��
//     ��ܻ��P0 or H0���⸹�W�h�A�æs�J���item_number���
//===============================================================
//======���}�{���X���t�d���@�A�u���ѵ{���ѦһP�ǲ�===============

var inn = this.getInnovator();
var thisItem = document.thisItem;
var strType= this.getType();
var strId= this.getId();
//--------------------------------------------


var iq_temprary_preamble=this.getProperty("iq_temprary_preamble","");
var itemnumber_flag=this.getProperty("itemnumber_flag","");

if(iq_temprary_preamble!="" && itemnumber_flag=="0"){
   
    var nextSequense="";
    if(iq_temprary_preamble=="P0"){
        nextSequense=inn.getNextSequence("iq_P0");
    }else if(iq_temprary_preamble=="H0"){
        nextSequense=inn.getNextSequence("iq_H0");
    }
    if(nextSequense!=""){
        this.setProperty("item_number",nextSequense);
        this.setProperty("itemnumber_flag","1");
        if (typeof top.onRefresh == 'undefined') {return;}
        var itm = top.aras.getItemById(strType, strId , 0);
        top.aras.uiShowItemEx(itm, undefined, true);
        top.onRefresh();
        
    }
}
else if(iq_temprary_preamble=="" && itemnumber_flag=="0")
{
    alert("�|���Ŀ��{�ɫe�m�X");
}
else if(itemnumber_flag=="1")
{
    alert("�w�g�⸹����");
}
