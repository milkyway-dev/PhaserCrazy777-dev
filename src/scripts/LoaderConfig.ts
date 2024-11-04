import { disconnect } from "process";

// import { Background } from './Background';
export const LoaderConfig = {
    Background:  "src/sprites/Background.jpg",
    spinBtn : "/src/sprites/ButtonSpin_1.png",
    spinBtnOnPressed :  "/src/sprites/ButtonSpinHover_1.png",
    maxBetBtn :  "/src/sprites/ButtonMaxBet_1.png",
    maxBetBtOnPressed :  "/src/sprites/ButtonMaxBetHover_1.png",
    autoSpin :  "/src/sprites/ButtonAutoSpin_1.png",
    autoSpinOnPressed :  "/src/sprites/ButtonAutoSpinHover_1.png",
    BetPanel :  "/src/sprites/PanelTotalBet.png",
    pBtn  :  "/src/sprites/ButtonPlus.png",
    mBtn  :  "/src/sprites/ButtonMinus.png",
    pBtnH  :  "/src/sprites/ButtonPlusHover.png",
    mBtnH  :  "/src/sprites/ButtonMinusHover.png",
    lines :  "/src/sprites/PanelLines.png",
    winPanel :  "/src/sprites/PanelWin.png",    
    balancePanel :  "/src/sprites/PanelBalance.png",
    MenuBtn :  "/src/sprites/ButtonMenu.png",
    MenuBtnH :  "/src/sprites/ButtonMenuHover.png",
    settingBtn :  "/src/sprites/ButtonSettings.png",
    settingBtnH :  "/src/sprites/ButtonSettingsHover.png",
    infoBtn :  "/src/sprites/ButtonInfo.png",
    infoBtnH :  "/src/sprites/ButtonInfoHover.png",
    rulesBtn :  "/src/sprites/ButtonRules.png",
    rulesBtnH :  "/src/sprites/ButtonRulesHover.png",
    exitButton: "src/sprites/ExitButton.png",
    exitButtonPressed: "src/sprites/ExitButtonHover.png",
    leftPlank: "src/sprites/leftPlank.png",
    rightPlank: "src/sprites/rightPlank.png",
    topPlank: "src/sprites/topPlank.png",
    bottomPlank: "src/sprites/bottomPlank.png",
    upPlnak: "src/sprites/Up.png",
    leftLanterns: "src/sprites/leftLanterns.png",
    rightLanterns: "src/sprites/rightLanterns.png",
    messagePopupBgImage: "src/sprites/messagepopupImageBg.png",
    yesButton: "src/sprites/yesButton.png",
    yesButtonHover: "src/sprites/yesButtonHover.png",
    noButtonHover: "src/sprites/noButtonHover.png",
    noButton: "src/sprites/noButton.png",
    bigWinPopup: "src/sprites/BigWinPopup.png",
    hugeWinPopup:"src/sprites/HugeWinPopup.png",
    megaWinPopup: "src/sprites/MegaWinPopUpImage.png",
    jackpotPopup: "src/sprites/jackpotPopup.png",
    freeSpinPopup: "src/sprites/FreeSpinPopup.png",
    freeSpinStartButton: "src/sprites/freeSpinStartButton.png",
    freeSpinStartButtonPressed: "src/sprites/freeSpinStartButton.png",
    spinCircle: "src/sprites/SpinCircle.png",
    spinCenter: "src/sprites/SpinCenter.png",
    wheelBg: "src/sprites/WheelBg.png",
    assetsloader: "src/sprites/assetsLoader.png",
    loaderBg: "src/sprites/loaderBg.png",
    stairs: "src/sprites/Stair.png",
    reelBg: "src/sprites/reelBg.jpg",   
    column: "src/sprites/columnLeft.png",
    snow: "src/sprites/Snow.png",
    roof:"src/sprites/Roof.png",
    winLine: "src/sprites/WinLine.png",
    settingPopup:"src/sprites/settingPopup.png",
    soundImage:"src/sprites/Sounds.png",
    musicImage: "src/sprites/Music.png",
    toggleBar: "src/sprites/ToggleBar.png",
    onButton: "src/sprites/On.png",
    offButton: "src/sprites/Off.png",
    headingImage: "src/sprites/PayTable_.png",
    payLinesImage: "src/sprites/payLinesImage.png",
    scrollBg: "src/sprites/ScrollBar.png",
    scroller:"src/sprites/Roller.png",
    gamelogo: "src/sprites/Logo.png",
    lineButton: "src/sprites/lineButton.png",
    settingText: "src/sprites/SettingButton.png",
    InfoPopupBg: "src/sprites/infoBg.jpg",
    disconnectClose: "src/sprites/disconnectClose.png",


    Wheelaward: "/src/sprites/Wheelaward.png",
    AmountBg: "src/sprites/AmountBg.png",
    fristFrameBg: "src/sprites/firstOuterFrame.png",
    differentSeven: "src/sprites/differentSeven.png", 
    differentBar: "src/sprites/differentBar.png",
    seconOuterFrame: "src/sprites/seconOuterFrame.png",
    ReelFrame: "src/sprites/ReelFrame.png",
    smallBoxx: "src/sprites/smallBoxx.png",
    SmallBoxxReel: "src/sprites/SmallBoxxReel.jpg",
    goldenBar: "src/sprites/goldenBar.png",
    centerLine: "src/sprites/centerLine.png",
    redBox: "src/sprites/RedBox.png",
    redSmallBox: "src/sprites/redSmallBox.png",

    Triangle0: "src/sprites/Triangle00.png",
    Triangle1: "src/sprites/Triangle01.png",
    Triangle2: "src/sprites/Triangle02.png",
    Triangle3: "src/sprites/Triangle03.png",
    Triangle4: "src/sprites/Triangle04.png",
    Triangle5: "src/sprites/Triangle05.png",
    Triangle6: "src/sprites/Triangle06.png",
    Triangle7: "src/sprites/Triangle07.png",
    Triangle8: "src/sprites/Triangle08.png",
    Triangle9: "src/sprites/Triangle09.png",
    Triangle10: "src/sprites/Triangle10.png",
    Triangle11: "src/sprites/Triangle11.png",
    Triangle12: "src/sprites/Triangle12.png",
    Triangle13: "src/sprites/Triangle13.png",
    Triangle14: "src/sprites/Triangle14.png",
    Triangle15: "src/sprites/Triangle15.png",
    Triangle16: "src/sprites/Triangle16.png",
    Triangle17: "src/sprites/Triangle17.png",
    Triangle18: "src/sprites/Triangle18.png",
    Triangle19: "src/sprites/Triangle19.png",
    Triangle20: "src/sprites/Triangle20.png",
    Triangle21: "src/sprites/Triangle21.png",
    Triangle22: "src/sprites/Triangle22.png",
    Triangle23: "src/sprites/Triangle23.png",
    Triangle24: "src/sprites/Triangle24.png",
    Triangle25: "src/sprites/Triangle25.png",
    Triangle26: "src/sprites/Triangle26.png",
    Triangle27: "src/sprites/Triangle27.png",
    Triangle28: "src/sprites/Triangle28.png",
    Triangle29: "src/sprites/Triangle29.png",
    Triangle30: "src/sprites/Triangle30.png",
    Triangle31: "src/sprites/Triangle31.png",
    Triangle32: "src/sprites/Triangle32.png",
    Triangle33: "src/sprites/Triangle33.png",
    Triangle34: "src/sprites/Triangle34.png",
    Triangle35: "src/sprites/Triangle35.png",
    Triangle36: "src/sprites/Triangle36.png",
    Triangle37: "src/sprites/Triangle37.png",
    Triangle38: "src/sprites/Triangle38.png",
    Triangle39: "src/sprites/Triangle39.png",
    Triangle40: "src/sprites/Triangle40.png",
    Triangle41: "src/sprites/Triangle41.png",
    Triangle42: "src/sprites/Triangle42.png",
    Triangle43: "src/sprites/Triangle43.png",
    Triangle44: "src/sprites/Triangle44.png",
    Triangle45: "src/sprites/Triangle45.png",
    Triangle46: "src/sprites/Triangle46.png",
    Triangle47: "src/sprites/Triangle47.png",
    
    
    slots0_0 :  "/src/sprites/Symbols/777/slots7771.png",
    slots0_1 :  "/src/sprites/Symbols/777/slots7772.png",
    slots0_2 :  "/src/sprites/Symbols/777/slots7773.png",
    slots0_3 :  "/src/sprites/Symbols/777/slots7774.png",
    slots0_4 :  "/src/sprites/Symbols/777/slots7775.png",
    slots0_5 :  "/src/sprites/Symbols/777/slots7776.png",
    slots0_6 :  "/src/sprites/Symbols/777/slots7777.png",
    slots0_7 :  "/src/sprites/Symbols/777/slots7778.png",
    slots0_8 :  "/src/sprites/Symbols/777/slots7779.png",
    slots0_9 :  "/src/sprites/Symbols/777/slots77710.png",
    slots0_10:  "/src/sprites/Symbols/777/slots77711.png",
    slots0_11:  "/src/sprites/Symbols/777/slots77712.png",
    slots0_12:  "/src/sprites/Symbols/777/slots77713.png",
    slots0_13:  "/src/sprites/Symbols/777/slots77714.png",
    slots0_14:  "/src/sprites/Symbols/777/slots77715.png",
    slots0_15:  "/src/sprites/Symbols/777/slots77716.png",
    slots0_16:  "/src/sprites/Symbols/777/slots77717.png",
    slots0_17:  "/src/sprites/Symbols/777/slots77718.png",
    slots0_18:  "/src/sprites/Symbols/777/slots77719.png",
    slots0_19:  "/src/sprites/Symbols/777/slots77720.png",
    slots0_20:  "/src/sprites/Symbols/777/slots77721.png",
    slots0_21:  "/src/sprites/Symbols/777/slots77722.png",
    slots0_22:  "/src/sprites/Symbols/777/slots77723.png",
    slots0_23:  "/src/sprites/Symbols/777/slots77723.png",

    slots1_0 :  "/src/sprites/Symbols/77/slots770.png",
    slots1_1 :  "/src/sprites/Symbols/77/slots771.png",
    slots1_2 :  "/src/sprites/Symbols/77/slots772.png",
    slots1_3 :  "/src/sprites/Symbols/77/slots773.png",
    slots1_4 :  "/src/sprites/Symbols/77/slots774.png",
    slots1_5 :  "/src/sprites/Symbols/77/slots775.png",
    slots1_6 :  "/src/sprites/Symbols/77/slots776.png",
    slots1_7 :  "/src/sprites/Symbols/77/slots777.png",
    slots1_8 :  "/src/sprites/Symbols/77/slots778.png",
    slots1_9 :  "/src/sprites/Symbols/77/slots779.png",
    slots1_10:  "/src/sprites/Symbols/77/slots7710.png",
    slots1_11:  "/src/sprites/Symbols/77/slots7711.png",
    slots1_12:  "/src/sprites/Symbols/77/slots7712.png",
    slots1_13:  "/src/sprites/Symbols/77/slots7713.png",
    slots1_14:  "/src/sprites/Symbols/77/slots7714.png",
    slots1_15:  "/src/sprites/Symbols/77/slots7715.png",
    slots1_16:  "/src/sprites/Symbols/77/slots7716.png",
    slots1_17:  "/src/sprites/Symbols/77/slots7717.png",
    slots1_18:  "/src/sprites/Symbols/77/slots7718.png",
    slots1_19:  "/src/sprites/Symbols/77/slots7719.png",
    slots1_20:  "/src/sprites/Symbols/77/slots7720.png",
    slots1_21:  "/src/sprites/Symbols/77/slots7721.png",
    slots1_22:  "/src/sprites/Symbols/77/slots7722.png",
    slots1_23:  "/src/sprites/Symbols/77/slots7723.png",

    slots2_0 :  "/src/sprites/Symbols/7/slots70.png",
    slots2_1 :  "/src/sprites/Symbols/7/slots71.png",
    slots2_2 :  "/src/sprites/Symbols/7/slots72.png",
    slots2_3 :  "/src/sprites/Symbols/7/slots73.png",
    slots2_4 :  "/src/sprites/Symbols/7/slots74.png",
    slots2_5 :  "/src/sprites/Symbols/7/slots75.png",
    slots2_6 :  "/src/sprites/Symbols/7/slots76.png",
    slots2_7 :  "/src/sprites/Symbols/7/slots77.png",
    slots2_8 :  "/src/sprites/Symbols/7/slots78.png",
    slots2_9 :  "/src/sprites/Symbols/7/slots79.png",
    slots2_10:  "/src/sprites/Symbols/7/slots710.png",
    slots2_11:  "/src/sprites/Symbols/7/slots711.png",
    slots2_12:  "/src/sprites/Symbols/7/slots712.png",
    slots2_13:  "/src/sprites/Symbols/7/slots713.png",
    slots2_14:  "/src/sprites/Symbols/7/slots714.png",
    slots2_15:  "/src/sprites/Symbols/7/slots715.png",
    slots2_16:  "/src/sprites/Symbols/7/slots716.png",
    slots2_17:  "/src/sprites/Symbols/7/slots717.png",
    slots2_18:  "/src/sprites/Symbols/7/slots718.png",
    slots2_19:  "/src/sprites/Symbols/7/slots719.png",
    slots2_20:  "/src/sprites/Symbols/7/slots720.png",
    slots2_21:  "/src/sprites/Symbols/7/slots721.png",
    slots2_22:  "/src/sprites/Symbols/7/slots722.png",
    slots2_23:  "/src/sprites/Symbols/7/slots723.png",
    
    slots3_0 :  "/src/sprites/Symbols/7/slots70.png",
    slots3_1 :  "/src/sprites/Symbols/7/slots71.png",
    slots3_2 :  "/src/sprites/Symbols/7/slots72.png",
    slots3_3 :  "/src/sprites/Symbols/7/slots73.png",
    slots3_4 :  "/src/sprites/Symbols/7/slots74.png",
    slots3_5 :  "/src/sprites/Symbols/7/slots75.png",
    slots3_6 :  "/src/sprites/Symbols/7/slots76.png",
    slots3_7 :  "/src/sprites/Symbols/7/slots77.png",
    slots3_8 :  "/src/sprites/Symbols/7/slots78.png",
    slots3_9 :  "/src/sprites/Symbols/7/slots79.png",
    slots3_10:  "/src/sprites/Symbols/7/slots710.png",
    slots3_11:  "/src/sprites/Symbols/7/slots711.png",
    slots3_12:  "/src/sprites/Symbols/7/slots712.png",
    slots3_13:  "/src/sprites/Symbols/7/slots713.png",
    slots3_14:  "/src/sprites/Symbols/7/slots714.png",
    slots3_15:  "/src/sprites/Symbols/7/slots715.png",
    slots3_16:  "/src/sprites/Symbols/7/slots716.png",
    slots3_17:  "/src/sprites/Symbols/7/slots717.png",
    slots3_18:  "/src/sprites/Symbols/7/slots718.png",
    slots3_19:  "/src/sprites/Symbols/7/slots719.png",
    slots3_20:  "/src/sprites/Symbols/7/slots720.png",
    slots3_21:  "/src/sprites/Symbols/7/slots721.png",
    slots3_22:  "/src/sprites/Symbols/7/slots722.png",
    slots3_23:  "/src/sprites/Symbols/7/slots723.png",

    slots4_0 :  "/src/sprites/Symbols/barbar/slotsbarbar0.png",
    slots4_1 :  "/src/sprites/Symbols/barbar/slotsbarbar1.png",
    slots4_2 :  "/src/sprites/Symbols/barbar/slotsbarbar2.png",
    slots4_3 :  "/src/sprites/Symbols/barbar/slotsbarbar3.png",
    slots4_4 :  "/src/sprites/Symbols/barbar/slotsbarbar4.png",
    slots4_5 :  "/src/sprites/Symbols/barbar/slotsbarbar5.png",
    slots4_6 :  "/src/sprites/Symbols/barbar/slotsbarbar6.png",
    slots4_7 :  "/src/sprites/Symbols/barbar/slotsbarbar7.png",
    slots4_8 :  "/src/sprites/Symbols/barbar/slotsbarbar8.png",
    slots4_9 :  "/src/sprites/Symbols/barbar/slotsbarbar9.png",
    slots4_10:  "/src/sprites/Symbols/barbar/slotsbarbar10.png",
    slots4_11:  "/src/sprites/Symbols/barbar/slotsbarbar11.png",
    slots4_12:  "/src/sprites/Symbols/barbar/slotsbarbar12.png",
    slots4_13:  "/src/sprites/Symbols/barbar/slotsbarbar13.png",
    slots4_14:  "/src/sprites/Symbols/barbar/slotsbarbar14.png",
    slots4_15:  "/src/sprites/Symbols/barbar/slotsbarbar15.png",
    slots4_16:  "/src/sprites/Symbols/barbar/slotsbarbar16.png",
    slots4_17:  "/src/sprites/Symbols/barbar/slotsbarbar17.png",
    slots4_18:  "/src/sprites/Symbols/barbar/slotsbarbar18.png",
    slots4_19:  "/src/sprites/Symbols/barbar/slotsbarbar19.png",
    slots4_20:  "/src/sprites/Symbols/barbar/slotsbarbar20.png",
    slots4_21:  "/src/sprites/Symbols/barbar/slotsbarbar21.png",
    slots4_22:  "/src/sprites/Symbols/barbar/slotsbarbar22.png",
    slots4_23:  "/src/sprites/Symbols/barbar/slotsbarbar23.png",

    slots5_0 :  "/src/sprites/Symbols/bar/slotsbar0.png",
    slots5_1 :  "/src/sprites/Symbols/bar/slotsbar1.png",
    slots5_2 :  "/src/sprites/Symbols/bar/slotsbar2.png",
    slots5_3 :  "/src/sprites/Symbols/bar/slotsbar3.png",
    slots5_4 :  "/src/sprites/Symbols/bar/slotsbar4.png",
    slots5_5 :  "/src/sprites/Symbols/bar/slotsbar5.png",
    slots5_6 :  "/src/sprites/Symbols/bar/slotsbar6.png",
    slots5_7 :  "/src/sprites/Symbols/bar/slotsbar7.png",
    slots5_8 :  "/src/sprites/Symbols/bar/slotsbar8.png",
    slots5_9 :  "/src/sprites/Symbols/bar/slotsbar9.png",
    slots5_10:  "/src/sprites/Symbols/bar/slotsbar10.png",
    slots5_11:  "/src/sprites/Symbols/bar/slotsbar11.png",
    slots5_12:  "/src/sprites/Symbols/bar/slotsbar12.png",
    slots5_13:  "/src/sprites/Symbols/bar/slotsbar13.png",
    slots5_14:  "/src/sprites/Symbols/bar/slotsbar14.png",
    slots5_15:  "/src/sprites/Symbols/bar/slotsbar15.png",
    slots5_16:  "/src/sprites/Symbols/bar/slotsbar16.png",
    slots5_17:  "/src/sprites/Symbols/bar/slotsbar17.png",
    slots5_18:  "/src/sprites/Symbols/bar/slotsbar18.png",
    slots5_19:  "/src/sprites/Symbols/bar/slotsbar19.png",
    slots5_20:  "/src/sprites/Symbols/bar/slotsbar20.png",
    slots5_21:  "/src/sprites/Symbols/bar/slotsbar21.png",
    slots5_22:  "/src/sprites/Symbols/bar/slotsbar22.png",
    slots5_23:  "/src/sprites/Symbols/bar/slotsbar23.png",

    slots6_0 :  "/src/sprites/Symbols/10x/slots10x0.png",
    slots6_1 :  "/src/sprites/Symbols/10x/slots10x1.png",
    slots6_2 :  "/src/sprites/Symbols/10x/slots10x2.png",
    slots6_3 :  "/src/sprites/Symbols/10x/slots10x3.png",
    slots6_4 :  "/src/sprites/Symbols/10x/slots10x4.png",
    slots6_5 :  "/src/sprites/Symbols/10x/slots10x5.png",
    slots6_6 :  "/src/sprites/Symbols/10x/slots10x6.png",
    slots6_7 :  "/src/sprites/Symbols/10x/slots10x7.png",
    slots6_8 :  "/src/sprites/Symbols/10x/slots10x8.png",
    slots6_9 :  "/src/sprites/Symbols/10x/slots10x9.png",
    slots6_10:  "/src/sprites/Symbols/10x/slots10x10.png",
    slots6_11:  "/src/sprites/Symbols/10x/slots10x11.png",
    slots6_12:  "/src/sprites/Symbols/10x/slots10x12.png",
    slots6_13:  "/src/sprites/Symbols/10x/slots10x13.png",
    slots6_14:  "/src/sprites/Symbols/10x/slots10x14.png",
    slots6_15:  "/src/sprites/Symbols/10x/slots10x15.png",
    slots6_16:  "/src/sprites/Symbols/10x/slots10x16.png",
    slots6_17:  "/src/sprites/Symbols/10x/slots10x17.png",
    slots6_18:  "/src/sprites/Symbols/10x/slots10x18.png",
    slots6_19:  "/src/sprites/Symbols/10x/slots10x19.png",
    slots6_20:  "/src/sprites/Symbols/10x/slots10x20.png",
    slots6_21:  "/src/sprites/Symbols/10x/slots10x21.png",
    slots6_22:  "/src/sprites/Symbols/10x/slots10x22.png",
    slots6_23:  "/src/sprites/Symbols/10x/slots10x23.png",

    slots7_0 :  "/src/sprites/Symbols/5x/slots5x0.png",
    slots7_1 :  "/src/sprites/Symbols/5x/slots5x1.png",
    slots7_2 :  "/src/sprites/Symbols/5x/slots5x2.png",
    slots7_3 :  "/src/sprites/Symbols/5x/slots5x3.png",
    slots7_4 :  "/src/sprites/Symbols/5x/slots5x4.png",
    slots7_5 :  "/src/sprites/Symbols/5x/slots5x5.png",
    slots7_6 :  "/src/sprites/Symbols/5x/slots5x6.png",
    slots7_7 :  "/src/sprites/Symbols/5x/slots5x7.png",
    slots7_8 :  "/src/sprites/Symbols/5x/slots5x8.png",
    slots7_9 :  "/src/sprites/Symbols/5x/slots5x9.png",
    slots7_10:  "/src/sprites/Symbols/5x/slots5x10.png",
    slots7_11:  "/src/sprites/Symbols/5x/slots5x11.png",
    slots7_12:  "/src/sprites/Symbols/5x/slots5x12.png",
    slots7_13:  "/src/sprites/Symbols/5x/slots5x13.png",
    slots7_14:  "/src/sprites/Symbols/5x/slots5x14.png",
    slots7_15:  "/src/sprites/Symbols/5x/slots5x15.png",
    slots7_16:  "/src/sprites/Symbols/5x/slots5x16.png",
    slots7_17:  "/src/sprites/Symbols/5x/slots5x17.png",
    slots7_18:  "/src/sprites/Symbols/5x/slots5x18.png",
    slots7_19:  "/src/sprites/Symbols/5x/slots5x19.png",
    slots7_20:  "/src/sprites/Symbols/5x/slots5x20.png",
    slots7_21:  "/src/sprites/Symbols/5x/slots5x21.png",
    slots7_22:  "/src/sprites/Symbols/5x/slots5x22.png",
    slots7_23:  "/src/sprites/Symbols/5x/slots5x23.png",

    slots8_0 :  "/src/sprites/Symbols/2x/slots2x0.png",
    slots8_1 :  "/src/sprites/Symbols/2x/slots2x1.png",
    slots8_2 :  "/src/sprites/Symbols/2x/slots2x2.png",
    slots8_3 :  "/src/sprites/Symbols/2x/slots2x3.png",
    slots8_4 :  "/src/sprites/Symbols/2x/slots2x4.png",
    slots8_5 :  "/src/sprites/Symbols/2x/slots2x5.png",
    slots8_6 :  "/src/sprites/Symbols/2x/slots2x6.png",
    slots8_7 :  "/src/sprites/Symbols/2x/slots2x7.png",
    slots8_8 :  "/src/sprites/Symbols/2x/slots2x8.png",
    slots8_9 :  "/src/sprites/Symbols/2x/slots2x9.png",
    slots8_10:  "/src/sprites/Symbols/2x/slots2x10.png",
    slots8_11:  "/src/sprites/Symbols/2x/slots2x11.png",
    slots8_12:  "/src/sprites/Symbols/2x/slots2x12.png",
    slots8_13:  "/src/sprites/Symbols/2x/slots2x13.png",
    slots8_14:  "/src/sprites/Symbols/2x/slots2x14.png",
    slots8_15:  "/src/sprites/Symbols/2x/slots2x15.png",
    slots8_16:  "/src/sprites/Symbols/2x/slots2x16.png",
    slots8_17:  "/src/sprites/Symbols/2x/slots2x17.png",
    slots8_18:  "/src/sprites/Symbols/2x/slots2x18.png",
    slots8_19:  "/src/sprites/Symbols/2x/slots2x19.png",
    slots8_20:  "/src/sprites/Symbols/2x/slots2x20.png",
    slots8_21:  "/src/sprites/Symbols/2x/slots2x21.png",
    slots8_22:  "/src/sprites/Symbols/2x/slots2x22.png",
    slots8_23:  "/src/sprites/Symbols/2x/slots2x23.png",

    
    slots9_0 :  "/src/sprites/Symbols/doubleAdd/doubleAdd0.png",
    slots9_1 :  "/src/sprites/Symbols/doubleAdd/doubleAdd1.png",
    slots9_2 :  "/src/sprites/Symbols/doubleAdd/doubleAdd2.png",
    slots9_3 :  "/src/sprites/Symbols/doubleAdd/doubleAdd3.png",
    slots9_4 :  "/src/sprites/Symbols/doubleAdd/doubleAdd4.png",
    slots9_5 :  "/src/sprites/Symbols/doubleAdd/doubleAdd5.png",
    slots9_6 :  "/src/sprites/Symbols/doubleAdd/doubleAdd6.png",
    slots9_7 :  "/src/sprites/Symbols/doubleAdd/doubleAdd7.png",
    slots9_8 :  "/src/sprites/Symbols/doubleAdd/doubleAdd8.png",
    slots9_9 :  "/src/sprites/Symbols/doubleAdd/doubleAdd9.png",
    slots9_10:  "/src/sprites/Symbols/doubleAdd/doubleAdd10.png",
    slots9_11:  "/src/sprites/Symbols/doubleAdd/doubleAdd11.png",
    slots9_12:  "/src/sprites/Symbols/doubleAdd/doubleAdd12.png",
    slots9_13:  "/src/sprites/Symbols/doubleAdd/doubleAdd13.png",
    slots9_14:  "/src/sprites/Symbols/doubleAdd/doubleAdd14.png",
    slots9_15:  "/src/sprites/Symbols/doubleAdd/doubleAdd15.png",
    slots9_16:  "/src/sprites/Symbols/doubleAdd/doubleAdd16.png",
    slots9_17:  "/src/sprites/Symbols/doubleAdd/doubleAdd17.png",
    slots9_18:  "/src/sprites/Symbols/doubleAdd/doubleAdd18.png",
    slots9_19:  "/src/sprites/Symbols/doubleAdd/doubleAdd19.png",
    slots9_20:  "/src/sprites/Symbols/doubleAdd/doubleAdd20.png",
    slots9_21:  "/src/sprites/Symbols/doubleAdd/doubleAdd21.png",
    slots9_22:  "/src/sprites/Symbols/doubleAdd/doubleAdd22.png",
    slots9_23:  "/src/sprites/Symbols/doubleAdd/doubleAdd23.png",

    slots10_0 :  "/src/sprites/Symbols/add/slotsAdd0.png",
    slots10_1 :  "/src/sprites/Symbols/add/slotsAdd1.png",
    slots10_2 :  "/src/sprites/Symbols/add/slotsAdd2.png",
    slots10_3 :  "/src/sprites/Symbols/add/slotsAdd3.png",
    slots10_4 :  "/src/sprites/Symbols/add/slotsAdd4.png",
    slots10_5 :  "/src/sprites/Symbols/add/slotsAdd5.png",
    slots10_6 :  "/src/sprites/Symbols/add/slotsAdd6.png",
    slots10_7 :  "/src/sprites/Symbols/add/slotsAdd7.png",
    slots10_8 :  "/src/sprites/Symbols/add/slotsAdd8.png",
    slots10_9 :  "/src/sprites/Symbols/add/slotsAdd9.png",
    slots10_10:  "/src/sprites/Symbols/add/slotsAdd10.png",
    slots10_11:  "/src/sprites/Symbols/add/slotsAdd11.png",
    slots10_12:  "/src/sprites/Symbols/add/slotsAdd12.png",
    slots10_13:  "/src/sprites/Symbols/add/slotsAdd13.png",
    slots10_14:  "/src/sprites/Symbols/add/slotsAdd14.png",
    slots10_15:  "/src/sprites/Symbols/add/slotsAdd15.png",
    slots10_16:  "/src/sprites/Symbols/add/slotsAdd16.png",
    slots10_17:  "/src/sprites/Symbols/add/slotsAdd17.png",
    slots10_18:  "/src/sprites/Symbols/add/slotsAdd18.png",
    slots10_19:  "/src/sprites/Symbols/add/slotsAdd19.png",
    slots10_20:  "/src/sprites/Symbols/add/slotsAdd20.png",
    slots10_21:  "/src/sprites/Symbols/add/slotsAdd21.png",
    slots10_22:  "/src/sprites/Symbols/add/slotsAdd22.png",
    slots10_23:  "/src/sprites/Symbols/add/slotsAdd23.png",
    

    slots11_0 :  "/src/sprites/Symbols/reSpin/slotsreSpin0.png",
    slots11_1 :  "/src/sprites/Symbols/reSpin/slotsreSpin1.png",
    slots11_2 :  "/src/sprites/Symbols/reSpin/slotsreSpin2.png",
    slots11_3 :  "/src/sprites/Symbols/reSpin/slotsreSpin3.png",
    slots11_4 :  "/src/sprites/Symbols/reSpin/slotsreSpin4.png",
    slots11_5 :  "/src/sprites/Symbols/reSpin/slotsreSpin5.png",
    slots11_6 :  "/src/sprites/Symbols/reSpin/slotsreSpin6.png",
    slots11_7 :  "/src/sprites/Symbols/reSpin/slotsreSpin7.png",
    slots11_8 :  "/src/sprites/Symbols/reSpin/slotsreSpin8.png",
    slots11_9 :  "/src/sprites/Symbols/reSpin/slotsreSpin9.png",
    slots11_10:  "/src/sprites/Symbols/reSpin/slotsreSpin10.png",
    slots11_11:  "/src/sprites/Symbols/reSpin/slotsreSpin11.png",
    slots11_12:  "/src/sprites/Symbols/reSpin/slotsreSpin12.png",
    slots11_13:  "/src/sprites/Symbols/reSpin/slotsreSpin13.png",
    slots11_14:  "/src/sprites/Symbols/reSpin/slotsreSpin14.png",
    slots11_15:  "/src/sprites/Symbols/reSpin/slotsreSpin15.png",
    slots11_16:  "/src/sprites/Symbols/reSpin/slotsreSpin16.png",
    slots11_17:  "/src/sprites/Symbols/reSpin/slotsreSpin17.png",
    slots11_18:  "/src/sprites/Symbols/reSpin/slotsreSpin18.png",
    slots11_19:  "/src/sprites/Symbols/reSpin/slotsreSpin19.png",
    slots11_20:  "/src/sprites/Symbols/reSpin/slotsreSpin20.png",
    slots11_21:  "/src/sprites/Symbols/reSpin/slotsreSpin21.png",
    slots11_22:  "/src/sprites/Symbols/reSpin/slotsreSpin22.png",
    slots11_23:  "/src/sprites/Symbols/reSpin/slotsreSpin23.png",

    slots12_0 :  "/src/sprites/Symbols/Scatter/Scatter2.png",
    slots12_1 :  "/src/sprites/Symbols/Scatter/Scatter3.png",
    slots12_2 :  "/src/sprites/Symbols/Scatter/Scatter4.png",
    slots12_3 :  "/src/sprites/Symbols/Scatter/Scatter5.png",
    slots12_4 :  "/src/sprites/Symbols/Scatter/Scatter6.png",
    slots12_5 :  "/src/sprites/Symbols/Scatter/Scatter7.png",
    slots12_6 :  "/src/sprites/Symbols/Scatter/Scatter8.png",
    slots12_7 :  "/src/sprites/Symbols/Scatter/Scatter9.png",
    slots12_8 :  "/src/sprites/Symbols/Scatter/Scatter10.png",
    slots12_9 :  "/src/sprites/Symbols/Scatter/Scatter11.png",
    slots12_10:  "/src/sprites/Symbols/Scatter/Scatter12.png",
    slots12_11:  "/src/sprites/Symbols/Scatter/Scatter13.png",
    slots12_12:  "/src/sprites/Symbols/Scatter/Scatter14.png",
    slots12_13:  "/src/sprites/Symbols/Scatter/Scatter15.png",
    slots12_14:  "/src/sprites/Symbols/Scatter/Scatter16.png",
    slots12_15:  "/src/sprites/Symbols/Scatter/Scatter17.png",
    slots12_16:  "/src/sprites/Symbols/Scatter/Scatter18.png",
    slots12_17:  "/src/sprites/Symbols/Scatter/Scatter19.png",
    slots12_18:  "/src/sprites/Symbols/Scatter/Scatter20.png",
    slots12_19:  "/src/sprites/Symbols/Scatter/Scatter21.png",
    slots12_20:  "/src/sprites/Symbols/Scatter/Scatter22.png",
    slots12_21:  "/src/sprites/Symbols/Scatter/Scatter23.png",
    slots12_22:  "/src/sprites/Symbols/Scatter/Scatter24.png",
    slots12_23:  "/src/sprites/Symbols/Scatter/Scatter25.png",
    slots12_24:  "/src/sprites/Symbols/Scatter/Scatter26.png",
    slots12_25:  "/src/sprites/Symbols/Scatter/Scatter27.png",
    slots12_26:  "/src/sprites/Symbols/Scatter/Scatter28.png",
    slots12_27:  "/src/sprites/Symbols/Scatter/Scatter29.png",
    slots12_28:  "/src/sprites/Symbols/Scatter/Scatter30.png",
    slots12_29:  "/src/sprites/Symbols/Scatter/Scatter31.png",
    slots12_30:  "/src/sprites/Symbols/Scatter/Scatter32.png",
    slots12_31:  "/src/sprites/Symbols/Scatter/Scatter33.png",
    slots12_32:  "/src/sprites/Symbols/Scatter/Scatter34.png",
    slots12_33:  "/src/sprites/Symbols/Scatter/Scatter35.png",
    slots12_34:  "/src/sprites/Symbols/Scatter/Scatter36.png",
    slots12_35:  "/src/sprites/Symbols/Scatter/Scatter37.png",
    slots12_36:  "/src/sprites/Symbols/Scatter/Scatter38.png",
    slots12_37:  "/src/sprites/Symbols/Scatter/Scatter39.png",
    slots12_38:  "/src/sprites/Symbols/Scatter/Scatter40.png",
    slots12_39:  "/src/sprites/Symbols/Scatter/Scatter41.png",
    slots12_40:  "/src/sprites/Symbols/Scatter/Scatter42.png",
    slots12_41:  "/src/sprites/Symbols/Scatter/Scatter43.png",
    slots12_42:  "/src/sprites/Symbols/Scatter/Scatter44.png",
    slots12_43:  "/src/sprites/Symbols/Scatter/Scatter45.png",
    slots12_44:  "/src/sprites/Symbols/Scatter/Scatter46.png",
    slots12_45:  "/src/sprites/Symbols/Scatter/Scatter47.png",
    slots12_46:  "/src/sprites/Symbols/Scatter/Scatter48.png",

}



export const staticData = {
    Background:  "src/sprites/Background.jpg",
};

export const fontData = ["Montserrat"];



export const LoaderSoundConfig: any = {
        backgroundMusic: "src/sounds/Teaser.mp3",
        onSpin :  "/src/sounds/slot-machine-loop.mp3",
        spinButton: "src/sounds/spin.wav",
        winMusic: "src/sounds/JackpotWinner.mp3",
        buttonpressed: "src/sounds/Game-Button.wav",
        spinWheelMusic: "src/sounds/spinWheel.mp3"
 
};

export const preloaderConfig = {
    // startLogo:  "/src/sprites/Logo.png")
}