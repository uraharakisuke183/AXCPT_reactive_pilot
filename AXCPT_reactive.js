/*********************** 
 * Axcpt_Reactive *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'AXCPT_reactive';  // from the Builder filename that created this script
const _urlId = new URLSearchParams(window.location.search).get('id') || 'unknown';
let expInfo = {
    'participant': _urlId,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.3, 0.3, 0.3]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruction0RoutineBegin());
flowScheduler.add(instruction0RoutineEachFrame());
flowScheduler.add(instruction0RoutineEnd());
flowScheduler.add(instruction5RoutineBegin());
flowScheduler.add(instruction5RoutineEachFrame());
flowScheduler.add(instruction5RoutineEnd());
const AX_demoLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AX_demoLoopBegin(AX_demoLoopScheduler));
flowScheduler.add(AX_demoLoopScheduler);
flowScheduler.add(AX_demoLoopEnd);



flowScheduler.add(instruction6RoutineBegin());
flowScheduler.add(instruction6RoutineEachFrame());
flowScheduler.add(instruction6RoutineEnd());
const BX_demoLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BX_demoLoopBegin(BX_demoLoopScheduler));
flowScheduler.add(BX_demoLoopScheduler);
flowScheduler.add(BX_demoLoopEnd);



flowScheduler.add(instruction7RoutineBegin());
flowScheduler.add(instruction7RoutineEachFrame());
flowScheduler.add(instruction7RoutineEnd());
const nogo_demoLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(nogo_demoLoopBegin(nogo_demoLoopScheduler));
flowScheduler.add(nogo_demoLoopScheduler);
flowScheduler.add(nogo_demoLoopEnd);



flowScheduler.add(instruction8RoutineBegin());
flowScheduler.add(instruction8RoutineEachFrame());
flowScheduler.add(instruction8RoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);



flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const blocks_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocks_loopLoopBegin(blocks_loopLoopScheduler));
flowScheduler.add(blocks_loopLoopScheduler);
flowScheduler.add(blocks_loopLoopEnd);





flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
const questions_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(questions_loopLoopBegin(questions_loopLoopScheduler));
flowScheduler.add(questions_loopLoopScheduler);
flowScheduler.add(questions_loopLoopEnd);


flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(data_saveRoutineBegin());
flowScheduler.add(data_saveRoutineEachFrame());
flowScheduler.add(data_saveRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions/demo_trials/demo_AX.xlsx', 'path': 'conditions/demo_trials/demo_AX.xlsx'},
    {'name': 'conditions/demo_trials/demo_BX.xlsx', 'path': 'conditions/demo_trials/demo_BX.xlsx'},
    {'name': 'conditions/demo_trials/demo_nogo.xlsx', 'path': 'conditions/demo_trials/demo_nogo.xlsx'},
    {'name': 'conditions/practice_trials_short.xlsx', 'path': 'conditions/practice_trials_short.xlsx'},
    {'name': 'conditions/blocks_short.xlsx', 'path': 'conditions/blocks_short.xlsx'},
    {'name': 'conditions/main_trials.xlsx', 'path': 'conditions/main_trials.xlsx'},
    {'name': 'questionnare/questionnaire_loop.xlsx', 'path': 'questionnare/questionnaire_loop.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instruction0Clock;
var instruction_pages;
var current_page;
var pid;
var instructions_text;
var page_counter;
var instr_title;
var instr_hint;
var instruction5Clock;
var instruction5_text;
var instruction5_endkey;
var trialClock;
var cue_text;
var isi_blank;
var border;
var probe_text;
var iti_fixation_crosses;
var cue_key_resp;
var probe_key_resp;
var feedbackClock;
var feedback_msg;
var show_feedback;
var feedback_text;
var feedback_key;
var instruction6Clock;
var instruction6_text;
var instruction6_endkey;
var instruction7Clock;
var instruction7_text;
var instruction7_endkey;
var instruction8Clock;
var instruction8_text;
var instruction8_endkey;
var practice_endClock;
var practice_endtext;
var practice_endkey;
var block_breakClock;
var block_break_text;
var block_break_key;
var endClock;
var end_text;
var end_key_resp;
var questionnareClock;
var question_text;
var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var thanksClock;
var thanks_text;
var data_saveClock;
var text_data_save;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction0"
  instruction0Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_instructions
  instruction_pages = [
      "Добро пожаловать в эксперимент!\n\nВам предстоит нажимать на клавиши при появлении на экране различных символов.\nСимволы объединены в пары:\n\nПЕРВЫЙ символ — всегда БУКВА.\n\nВТОРОЙ символ — либо БУКВА, либо ЦИФРА.\n\nПосле ВТОРОГО символа на экране появляются три крестика, свидетельствующие о переходе к следующей паре символов.\n\nИспользуйте стрелки, чтобы перемещаться между листами инструкции.",
      "При появлении ПЕРВОЙ буквы: ВСЕГДА нажимайте клавишу «M».\n\nПри появлении ВТОРОГО символа:\n\n1. Если ВТОРОЙ символ — ЦИФРА, НЕ НАЖИМАЙТЕ ничего.\n\n2. Если ПЕРВАЯ буква в паре — А, ВТОРАЯ буква — X (то есть пара AX),\nпри появлении ВТОРОГО символа НАЖИМАЙТЕ «Z».\nТо есть в паре AX: при появлении ПЕРВОЙ буквы (А) — нажать «M»,\nпри появлении ВТОРОЙ (X) — «Z».\n\n3. Если ПЕРВОЙ буквой была НЕ А, и/или ВТОРОЙ буквой была НЕ X\n(то есть не получилось пары AX) — нажимайте «M» при появлении и первой, и второй букв.\n\nИспользуйте стрелки, чтобы перемещаться между листами инструкции.",
      "Для ответов Вам понадобятся только клавиши «M» и «Z»:\n\n  \u2022 левый указательный палец — на клавишу «Z»\n  \u2022 правый указательный палец — на клавишу «M»\n\nВаш ответ нельзя изменить после нажатия клавиши,\nесли вы ошиблись — просто продолжайте выполнять задание.\n\nСтарайтесь отвечать как можно БЫСТРЕЕ\nи как можно ТОЧНЕЕ."
  ];
  
  current_page = 0;
  
  // Валидация participant ID из URL (?id=PXX)
  let pid = psychoJS.experiment.extraInfo['participant'];
  pid = pid.trim();
  if (!pid || !/^[A-Za-z0-9_-]+$/.test(pid)) {
      alert('Participant ID не указан или некорректен. Проверьте ссылку (?id=P01).');
      quitPsychoJS('', false);
  }
  instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.038,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  page_counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'page_counter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -2.0 
  });
  
  instr_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_title',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.43], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  instr_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_hint',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.38)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "instruction5"
  instruction5Clock = new util.Clock();
  instruction5_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction5_text',
    text: 'Проведем небольшую тренировку, вот несколько примеров, которые помогут Вам лучше понять задание:\n\nПервый пример: \nВы увидите букву А - нажимайте M.\nПосле Вы увидите букву Х - нажимайте Z.\nЭто пара AX!\n\nПожалуйста, положите сейчас Ваш левый указательный палец на z и правый указательный палец на m. \n\nНажмите клавишу K, чтобы провести несколько тренировочных проб.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction5_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  cue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text',
    text: '',
    font: 'Tahoma',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  isi_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi_blank',
    text: '+++',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  border = new visual.Rect ({
    win: psychoJS.window, name: 'border', 
    width: [0.15, 0.2][0], height: [0.15, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('white'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  probe_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_text',
    text: '',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  iti_fixation_crosses = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_fixation_crosses',
    text: ' + +\n +\n',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  cue_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  probe_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from feedback_code
  feedback_msg = "";
  show_feedback = false;
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction6"
  instruction6Clock = new util.Clock();
  instruction6_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction6_text',
    text: 'Второй пример:\n \nПЕРВОЙ буквой в паре будет НЕ А - нажимайте M.\nПосле Вы увидите букву Х - нажимайте M.\nЭто НЕ AX-пара!\n\nПожалуйста положите сейчас Ваш левый указательный палец на клавишу Z и правый указательный палец на M. \n\nНажмите клавишу K, чтобы провести несколько тренировочных проб.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction6_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction7"
  instruction7Clock = new util.Clock();
  instruction7_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction7_text',
    text: 'Третий пример:\n \nНа ПЕРВУЮ букву (А или любую другую) в паре  - всегда нажимайте M.\nЕсли после Вы увидите ЦИФРУ - не нажимайте НИЧЕГО.\n\nПри появлении цифры нажатие не требуется!\n\nПожалуйста положите сейчас Ваш левый указательный палец на клавишу Z и правый указательный палец на M. \n\nНажмите клавишу K, чтобы провести несколько тренировочных проб.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction7_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction8"
  instruction8Clock = new util.Clock();
  instruction8_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction8_text',
    text: 'Переходим к финальной тренировке на смешанных пробах! \n\nНажмите клавишу K, чтобы продолжить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction8_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  practice_endtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_endtext',
    text: 'Вы завершили тренировку! \n\nТеперь начнется основная часть эксперимента.\n\nПожалуйста, держите левый указательный палец на клавише Z, а правый указательный палец на клавише M на протяжении всего эксперимента и отвечайте как можно быстрее и точнее.\n\nНажмите K, чтобы начать.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  practice_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  block_break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_break_text',
    text: 'Вы выполнили 1/3 (или 2/3) эксперимента!\n\nПожалуйста, сделайте перерыв на 1–5 минут.\n\nЧерез одну минуту вы сможете продолжить выполнение задания.\n\nЕсли вам нужно больше времени, это нормально, но, пожалуйста, не делайте перерыв дольше 5 минут.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  block_break_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Основная часть эксперимента завершена.\n\nБлагодарим вас за участие!\n\nПрежде чем закончить, пожалуйста, ответьте на несколько коротких вопросов.\nВаши ответы помогут нам корректно интерпретировать результаты.\n\nНажмите K, чтобы перейти к вопросам.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "questionnare"
  questionnareClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: '',
    font: 'Noto Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.06,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  btn1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn1',
    text: '',
    font: 'Noto Sans',
    pos: [0.0, 0.05],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  
  btn2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn2',
    text: '',
    font: 'Noto Sans',
    pos: [0, (- 0.04)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  
  btn3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn3',
    text: '',
    font: 'Noto Sans',
    pos: [0.0, (- 0.13)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  
  btn4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn4',
    text: '',
    font: 'Noto Sans',
    pos: [0, (- 0.22)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  
  btn5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn5',
    text: '',
    font: 'Noto Sans',
    pos: [0, (- 0.31)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  
  // Run 'Begin Experiment' code from code_questionnaire
  btn1.clock = new util.Clock();
  btn1.buttonClock = btn1.clock;
  
  btn2.clock = new util.Clock();
  btn2.buttonClock = btn2.clock;
  
  btn3.clock = new util.Clock();
  btn3.buttonClock = btn3.clock;
  
  btn4.clock = new util.Clock();
  btn4.buttonClock = btn4.clock;
  
  btn5.clock = new util.Clock();
  btn5.buttonClock = btn5.clock;
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Спасибо за участие!\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "data_save"
  data_saveClock = new util.Clock();
  text_data_save = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_data_save',
    text: 'Подождите, идет запись данных эксперимента.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instruction0MaxDurationReached;
var instruction0MaxDuration;
var instruction0Components;
function instruction0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction0Clock.reset();
    routineTimer.reset();
    instruction0MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instructions
    current_page = 0;
    instr_title.setText("Инструкция");
    instructions_text.setText(instruction_pages[current_page]);
    page_counter.setText((current_page + 1).toString() + " / " + instruction_pages.length.toString());
    
    if (current_page === instruction_pages.length - 1) {
        instr_hint.setText("Нажмите -> чтобы перейти к тренировочным примерам");
    } else {
        instr_hint.setText("Используйте стрелки <- -> для перемещения между листами");
    }
    psychoJS.experiment.addData('instruction0.started', globalClock.getTime());
    instruction0MaxDuration = null
    // keep track of which components have finished
    instruction0Components = [];
    instruction0Components.push(instructions_text);
    instruction0Components.push(page_counter);
    instruction0Components.push(instr_title);
    instruction0Components.push(instr_hint);
    
    for (const thisComponent of instruction0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction0' ---
    // get current time
    t = instruction0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_instructions
    var keys = psychoJS.eventManager.getKeys({keyList: ["right", "left"]});
    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key === "right") {
            if (current_page < instruction_pages.length - 1) {
                current_page = current_page + 1;
                instructions_text.setText(instruction_pages[current_page]);
                page_counter.setText((current_page + 1).toString() + " / " + instruction_pages.length.toString());
                if (current_page === instruction_pages.length - 1) {
                    instr_hint.setText("Нажмите -> чтобы перейти к тренировочным примерам");
                } else {
                    instr_hint.setText("Используйте стрелки <- -> для перемещения между листами");
                }
            } else {
                continueRoutine = false;
            }
        } else if (key === "left") {
            if (current_page > 0) {
                current_page = current_page - 1;
                instructions_text.setText(instruction_pages[current_page]);
                page_counter.setText((current_page + 1).toString() + " / " + instruction_pages.length.toString());
                instr_hint.setText("Используйте стрелки <- -> для перемещения между листами");
            }
        }
    }
    
    // *instructions_text* updates
    if (t >= 0.0 && instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text.tStart = t;  // (not accounting for frame time here)
      instructions_text.frameNStart = frameN;  // exact frame index
      
      instructions_text.setAutoDraw(true);
    }
    
    
    // if instructions_text is active this frame...
    if (instructions_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *page_counter* updates
    if (t >= 0.0 && page_counter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      page_counter.tStart = t;  // (not accounting for frame time here)
      page_counter.frameNStart = frameN;  // exact frame index
      
      page_counter.setAutoDraw(true);
    }
    
    
    // if page_counter is active this frame...
    if (page_counter.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_title* updates
    if (t >= 0.0 && instr_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_title.tStart = t;  // (not accounting for frame time here)
      instr_title.frameNStart = frameN;  // exact frame index
      
      instr_title.setAutoDraw(true);
    }
    
    
    // if instr_title is active this frame...
    if (instr_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_hint* updates
    if (t >= 0.0 && instr_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_hint.tStart = t;  // (not accounting for frame time here)
      instr_hint.frameNStart = frameN;  // exact frame index
      
      instr_hint.setAutoDraw(true);
    }
    
    
    // if instr_hint is active this frame...
    if (instr_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction0' ---
    for (const thisComponent of instruction0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction0.stopped', globalClock.getTime());
    // the Routine "instruction0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction5MaxDurationReached;
var _instruction5_endkey_allKeys;
var instruction5MaxDuration;
var instruction5Components;
function instruction5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction5Clock.reset();
    routineTimer.reset();
    instruction5MaxDurationReached = false;
    // update component parameters for each repeat
    instruction5_endkey.keys = undefined;
    instruction5_endkey.rt = undefined;
    _instruction5_endkey_allKeys = [];
    psychoJS.experiment.addData('instruction5.started', globalClock.getTime());
    instruction5MaxDuration = null
    // keep track of which components have finished
    instruction5Components = [];
    instruction5Components.push(instruction5_text);
    instruction5Components.push(instruction5_endkey);
    
    for (const thisComponent of instruction5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction5' ---
    // get current time
    t = instruction5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction5_text* updates
    if (t >= 0.0 && instruction5_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction5_text.tStart = t;  // (not accounting for frame time here)
      instruction5_text.frameNStart = frameN;  // exact frame index
      
      instruction5_text.setAutoDraw(true);
    }
    
    
    // if instruction5_text is active this frame...
    if (instruction5_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruction5_endkey* updates
    if (t >= 0.0 && instruction5_endkey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction5_endkey.tStart = t;  // (not accounting for frame time here)
      instruction5_endkey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instruction5_endkey.clock.reset();
      instruction5_endkey.start();
      instruction5_endkey.clearEvents();
    }
    
    // if instruction5_endkey is active this frame...
    if (instruction5_endkey.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction5_endkey.getKeys({
        keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
        waitRelease: false
      });
      _instruction5_endkey_allKeys = _instruction5_endkey_allKeys.concat(theseKeys);
      if (_instruction5_endkey_allKeys.length > 0) {
        instruction5_endkey.keys = _instruction5_endkey_allKeys[_instruction5_endkey_allKeys.length - 1].name;  // just the last key pressed
        instruction5_endkey.rt = _instruction5_endkey_allKeys[_instruction5_endkey_allKeys.length - 1].rt;
        instruction5_endkey.duration = _instruction5_endkey_allKeys[_instruction5_endkey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction5' ---
    for (const thisComponent of instruction5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction5_endkey.corr, level);
    }
    psychoJS.experiment.addData('instruction5_endkey.keys', instruction5_endkey.keys);
    if (typeof instruction5_endkey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction5_endkey.rt', instruction5_endkey.rt);
        psychoJS.experiment.addData('instruction5_endkey.duration', instruction5_endkey.duration);
        routineTimer.reset();
        }
    
    instruction5_endkey.stop();
    // the Routine "instruction5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AX_demo;
function AX_demoLoopBegin(AX_demoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    AX_demo = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/demo_trials/demo_AX.xlsx',
      seed: undefined, name: 'AX_demo'
    });
    psychoJS.experiment.addLoop(AX_demo); // add the loop to the experiment
    currentLoop = AX_demo;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAX_demo of AX_demo) {
      snapshot = AX_demo.getSnapshot();
      AX_demoLoopScheduler.add(importConditions(snapshot));
      AX_demoLoopScheduler.add(trialRoutineBegin(snapshot));
      AX_demoLoopScheduler.add(trialRoutineEachFrame());
      AX_demoLoopScheduler.add(trialRoutineEnd(snapshot));
      AX_demoLoopScheduler.add(feedbackRoutineBegin(snapshot));
      AX_demoLoopScheduler.add(feedbackRoutineEachFrame());
      AX_demoLoopScheduler.add(feedbackRoutineEnd(snapshot));
      AX_demoLoopScheduler.add(AX_demoLoopEndIteration(AX_demoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function AX_demoLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(AX_demo);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function AX_demoLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var BX_demo;
function BX_demoLoopBegin(BX_demoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    BX_demo = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/demo_trials/demo_BX.xlsx',
      seed: undefined, name: 'BX_demo'
    });
    psychoJS.experiment.addLoop(BX_demo); // add the loop to the experiment
    currentLoop = BX_demo;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBX_demo of BX_demo) {
      snapshot = BX_demo.getSnapshot();
      BX_demoLoopScheduler.add(importConditions(snapshot));
      BX_demoLoopScheduler.add(trialRoutineBegin(snapshot));
      BX_demoLoopScheduler.add(trialRoutineEachFrame());
      BX_demoLoopScheduler.add(trialRoutineEnd(snapshot));
      BX_demoLoopScheduler.add(feedbackRoutineBegin(snapshot));
      BX_demoLoopScheduler.add(feedbackRoutineEachFrame());
      BX_demoLoopScheduler.add(feedbackRoutineEnd(snapshot));
      BX_demoLoopScheduler.add(BX_demoLoopEndIteration(BX_demoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function BX_demoLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(BX_demo);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BX_demoLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var nogo_demo;
function nogo_demoLoopBegin(nogo_demoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    nogo_demo = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/demo_trials/demo_nogo.xlsx',
      seed: undefined, name: 'nogo_demo'
    });
    psychoJS.experiment.addLoop(nogo_demo); // add the loop to the experiment
    currentLoop = nogo_demo;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNogo_demo of nogo_demo) {
      snapshot = nogo_demo.getSnapshot();
      nogo_demoLoopScheduler.add(importConditions(snapshot));
      nogo_demoLoopScheduler.add(trialRoutineBegin(snapshot));
      nogo_demoLoopScheduler.add(trialRoutineEachFrame());
      nogo_demoLoopScheduler.add(trialRoutineEnd(snapshot));
      nogo_demoLoopScheduler.add(feedbackRoutineBegin(snapshot));
      nogo_demoLoopScheduler.add(feedbackRoutineEachFrame());
      nogo_demoLoopScheduler.add(feedbackRoutineEnd(snapshot));
      nogo_demoLoopScheduler.add(nogo_demoLoopEndIteration(nogo_demoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function nogo_demoLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(nogo_demo);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function nogo_demoLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/practice_trials_short.xlsx',
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop of practice_loop) {
      snapshot = practice_loop.getSnapshot();
      practice_loopLoopScheduler.add(importConditions(snapshot));
      practice_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(trialRoutineEachFrame());
      practice_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(feedbackRoutineEachFrame());
      practice_loopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_loopLoopEndIteration(practice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks_loop;
function blocks_loopLoopBegin(blocks_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/blocks_short.xlsx',
      seed: undefined, name: 'blocks_loop'
    });
    psychoJS.experiment.addLoop(blocks_loop); // add the loop to the experiment
    currentLoop = blocks_loop;  // we're now the current loop
    
// Schedule all the trials in the trialList:
    blocks_loop.forEach(function() {
      snapshot = blocks_loop.getSnapshot();
    
      blocks_loopLoopScheduler.add(importConditions(snapshot));
      const trials_loopLoopScheduler = new Scheduler(psychoJS);
      blocks_loopLoopScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler, snapshot));
      blocks_loopLoopScheduler.add(trials_loopLoopScheduler);
      blocks_loopLoopScheduler.add(trials_loopLoopEnd);
      blocks_loopLoopScheduler.add(async function() {
        if (!psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      });
      blocks_loopLoopScheduler.add(block_breakRoutineBegin(snapshot));
      blocks_loopLoopScheduler.add(block_breakRoutineEachFrame());
      blocks_loopLoopScheduler.add(block_breakRoutineEnd(snapshot));
      blocks_loopLoopScheduler.add(blocks_loopLoopEndIteration(blocks_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

var trials_loop;
function trials_loopLoopBegin(trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions/main_trials.xlsx', block_rows),
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop of trials_loop) {
      snapshot = trials_loop.getSnapshot();
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(trialRoutineEachFrame());
      trials_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(trials_loopLoopEndIteration(trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocks_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocks_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var questions_loop;
function questions_loopLoopBegin(questions_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    questions_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questionnare/questionnaire_loop.xlsx',
      seed: undefined, name: 'questions_loop'
    });
    psychoJS.experiment.addLoop(questions_loop); // add the loop to the experiment
    currentLoop = questions_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuestions_loop of questions_loop) {
      snapshot = questions_loop.getSnapshot();
      questions_loopLoopScheduler.add(importConditions(snapshot));
      questions_loopLoopScheduler.add(questionnareRoutineBegin(snapshot));
      questions_loopLoopScheduler.add(questionnareRoutineEachFrame());
      questions_loopLoopScheduler.add(questionnareRoutineEnd(snapshot));
      questions_loopLoopScheduler.add(questions_loopLoopEndIteration(questions_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function questions_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(questions_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function questions_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _cue_key_resp_allKeys;
var _probe_key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    cue_text.setText(cue);
    border.setPos([0, border_position]);
    border.setLineColor(new util.Color(border_colour));
    probe_text.setPos([0, probe_position]);
    probe_text.setText(probe);
    cue_key_resp.keys = undefined;
    cue_key_resp.rt = undefined;
    _cue_key_resp_allKeys = [];
    probe_key_resp.keys = undefined;
    probe_key_resp.rt = undefined;
    _probe_key_resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(cue_text);
    trialComponents.push(isi_blank);
    trialComponents.push(border);
    trialComponents.push(probe_text);
    trialComponents.push(iti_fixation_crosses);
    trialComponents.push(cue_key_resp);
    trialComponents.push(probe_key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_text* updates
    if (t >= 0.0 && cue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text.tStart = t;  // (not accounting for frame time here)
      cue_text.frameNStart = frameN;  // exact frame index
      
      cue_text.setAutoDraw(true);
    }
    
    
    // if cue_text is active this frame...
    if (cue_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + cue_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_text.tStop = t;  // not accounting for scr refresh
      cue_text.frameNStop = frameN;  // exact frame index
      // update status
      cue_text.status = PsychoJS.Status.FINISHED;
      cue_text.setAutoDraw(false);
    }
    
    
    // *isi_blank* updates
    if (t >= 0.5 && isi_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_blank.tStart = t;  // (not accounting for frame time here)
      isi_blank.frameNStart = frameN;  // exact frame index
      
      isi_blank.setAutoDraw(true);
    }
    
    
    // if isi_blank is active this frame...
    if (isi_blank.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + isi_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      isi_blank.tStop = t;  // not accounting for scr refresh
      isi_blank.frameNStop = frameN;  // exact frame index
      // update status
      isi_blank.status = PsychoJS.Status.FINISHED;
      isi_blank.setAutoDraw(false);
    }
    
    
    // *border* updates
    if (t >= 4.5 && border.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border.tStart = t;  // (not accounting for frame time here)
      border.frameNStart = frameN;  // exact frame index
      
      border.setAutoDraw(true);
    }
    
    
    // if border is active this frame...
    if (border.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 4.5 + border_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (border.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      border.tStop = t;  // not accounting for scr refresh
      border.frameNStop = frameN;  // exact frame index
      // update status
      border.status = PsychoJS.Status.FINISHED;
      border.setAutoDraw(false);
    }
    
    
    // *probe_text* updates
    if (t >= 4.75 && probe_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_text.tStart = t;  // (not accounting for frame time here)
      probe_text.frameNStart = frameN;  // exact frame index
      
      probe_text.setAutoDraw(true);
    }
    
    
    // if probe_text is active this frame...
    if (probe_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 4.75 + probe_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (probe_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      probe_text.tStop = t;  // not accounting for scr refresh
      probe_text.frameNStop = frameN;  // exact frame index
      // update status
      probe_text.status = PsychoJS.Status.FINISHED;
      probe_text.setAutoDraw(false);
    }
    
    
    // *iti_fixation_crosses* updates
    if (t >= 5.25 && iti_fixation_crosses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_fixation_crosses.tStart = t;  // (not accounting for frame time here)
      iti_fixation_crosses.frameNStart = frameN;  // exact frame index
      
      iti_fixation_crosses.setAutoDraw(true);
    }
    
    
    // if iti_fixation_crosses is active this frame...
    if (iti_fixation_crosses.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5.25 + iti_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (iti_fixation_crosses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      iti_fixation_crosses.tStop = t;  // not accounting for scr refresh
      iti_fixation_crosses.frameNStop = frameN;  // exact frame index
      // update status
      iti_fixation_crosses.status = PsychoJS.Status.FINISHED;
      iti_fixation_crosses.setAutoDraw(false);
    }
    
    
    // *cue_key_resp* updates
    if (t >= 0.0 && cue_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_key_resp.tStart = t;  // (not accounting for frame time here)
      cue_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { cue_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { cue_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { cue_key_resp.clearEvents(); });
    }
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_key_resp.tStop = t;  // not accounting for scr refresh
      cue_key_resp.frameNStop = frameN;  // exact frame index
      // update status
      cue_key_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (cue_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        cue_key_resp.tStop = t;  // not accounting for scr refresh
        cue_key_resp.frameNStop = frameN;  // exact frame index
        // update status
        cue_key_resp.status = PsychoJS.Status.FINISHED;
        cue_key_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if cue_key_resp is active this frame...
      if (cue_key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = cue_key_resp.getKeys({
          keyList: typeof ['m','z',] === 'string' ? [['m','z',]] : ['m','z',], 
          waitRelease: false
        });
        _cue_key_resp_allKeys = _cue_key_resp_allKeys.concat(theseKeys);
        if (_cue_key_resp_allKeys.length > 0) {
          cue_key_resp.keys = _cue_key_resp_allKeys[0].name;  // just the first key pressed
          cue_key_resp.rt = _cue_key_resp_allKeys[0].rt;
          cue_key_resp.duration = _cue_key_resp_allKeys[0].duration;
          // was this correct?
          if (cue_key_resp.keys == cue_resp) {
              cue_key_resp.corr = 1;
          } else {
              cue_key_resp.corr = 0;
          }
        }
      }
      
      
      // *probe_key_resp* updates
      if (t >= 4.75 && probe_key_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        probe_key_resp.tStart = t;  // (not accounting for frame time here)
        probe_key_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { probe_key_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { probe_key_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { probe_key_resp.clearEvents(); });
      }
      frameRemains = 4.75 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (probe_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        probe_key_resp.tStop = t;  // not accounting for scr refresh
        probe_key_resp.frameNStop = frameN;  // exact frame index
        // update status
        probe_key_resp.status = PsychoJS.Status.FINISHED;
        frameRemains = 4.75 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (probe_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          probe_key_resp.tStop = t;  // not accounting for scr refresh
          probe_key_resp.frameNStop = frameN;  // exact frame index
          // update status
          probe_key_resp.status = PsychoJS.Status.FINISHED;
          probe_key_resp.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if probe_key_resp is active this frame...
        if (probe_key_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = probe_key_resp.getKeys({
            keyList: typeof ['m','z',] === 'string' ? [['m','z',]] : ['m','z',], 
            waitRelease: false
          });
          _probe_key_resp_allKeys = _probe_key_resp_allKeys.concat(theseKeys);
          if (_probe_key_resp_allKeys.length > 0) {
            probe_key_resp.keys = _probe_key_resp_allKeys[0].name;  // just the first key pressed
            probe_key_resp.rt = _probe_key_resp_allKeys[0].rt;
            probe_key_resp.duration = _probe_key_resp_allKeys[0].duration;
            // was this correct?
            if (probe_key_resp.keys == probe_resp) {
                probe_key_resp.corr = 1;
            } else {
                probe_key_resp.corr = 0;
            }
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of trialComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
var probe_corr;
function trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'trial' ---
        for (const thisComponent of trialComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (cue_key_resp.keys === undefined) {
          if (['None','none',undefined].includes(cue_resp)) {
             cue_key_resp.corr = 1;  // correct non-response
          } else {
             cue_key_resp.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(cue_key_resp.corr, level);
        }
        psychoJS.experiment.addData('cue_key_resp.keys', cue_key_resp.keys);
        psychoJS.experiment.addData('cue_key_resp.corr', cue_key_resp.corr);
        if (typeof cue_key_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('cue_key_resp.rt', cue_key_resp.rt);
            psychoJS.experiment.addData('cue_key_resp.duration', cue_key_resp.duration);
            }
        
        cue_key_resp.stop();
        // was no response the correct answer?!
        if (probe_key_resp.keys === undefined) {
          if (['None','none',undefined].includes(probe_resp)) {
             probe_key_resp.corr = 1;  // correct non-response
          } else {
             probe_key_resp.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(probe_key_resp.corr, level);
        }
        psychoJS.experiment.addData('probe_key_resp.keys', probe_key_resp.keys);
        psychoJS.experiment.addData('probe_key_resp.corr', probe_key_resp.corr);
        if (typeof probe_key_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('probe_key_resp.rt', probe_key_resp.rt);
            psychoJS.experiment.addData('probe_key_resp.duration', probe_key_resp.duration);
            }
        
        probe_key_resp.stop();
        // Run 'End Routine' code from code_probe_corr
        // --- End Routine: code_probe_corr ---
        
        let correct_ans = probe_resp;
        let pressed = probe_key_resp.keys;
        
        // Определяем probe_corr
        if (correct_ans === '' || correct_ans === null || correct_ans === undefined) {
            // no-go проба: правильно — ничего не нажимать
            probe_corr = (pressed === null || pressed === undefined || pressed.length === 0) ? 1 : 0;
        } else {
            // go проба: сравниваем последнюю нажатую клавишу с правильным ответом
            probe_corr = (Array.isArray(pressed) && pressed[pressed.length - 1] === correct_ans) ? 1 : 0;
        }
        
        // Запись данных
        psychoJS.experiment.addData('probe_corr', probe_corr);
        psychoJS.experiment.addData('is_nogo', (pressed === null || pressed === undefined || pressed.length === 0) ? 1 : 0);
        
        // Запись номера блока/триала — только если мы внутри основных блоков
        try {
            if (typeof blocks_loop !== 'undefined' && blocks_loop !== null) {
                psychoJS.experiment.addData('block_number', blocks_loop.thisN + 1);
                psychoJS.experiment.addData('trial_number', trials_loop.thisN + 1);
            }
        } catch(e) {
            // Демо-триалы: blocks_loop ещё не существует, пропускаем
        }
        // the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var feedbackMaxDurationReached;
var _feedback_key_allKeys;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'feedback' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        feedbackClock.reset();
        routineTimer.reset();
        feedbackMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from feedback_code
        show_feedback = false;
        feedback_msg = "";
        
        if (cue_resp.toString().toLowerCase() !== "none") {
            if (cue_key_resp.corr === 0) {
                if (!cue_key_resp.keys || cue_key_resp.keys.length === 0) {
                    feedback_msg = "СЛИШКОМ МЕДЛЕННО!\n\n" +
                        "На ПЕРВУЮ букву всегда нужно нажимать M.\n\n" +
                        "Нажмите K для продолжения.";
                } else {
                    feedback_msg = "НЕВЕРНАЯ КНОПКА!\n\n" +
                        "На ПЕРВУЮ букву всегда нажимайте M.\n\n" +
                        "Нажмите K для продолжения.";
                }
                show_feedback = true;
            }
        }
        
        if (!show_feedback) {
            if (probe_key_resp.keys && probe_key_resp.keys.length > 0) {
                if (probe_corr === 0) {
                    if (trial_type === "AX") {
                        feedback_msg = "НЕВЕРНАЯ КНОПКА!\n\n" +
                            "Когда ПЕРВАЯ буква - A и ВТОРАЯ - X,\n" +
                            "нужно нажать Z при появлении X.\n\n" +
                            "Нажмите K для продолжения.";
                    } else if (trial_type === "Ang" || trial_type === "Bng") {
                        feedback_msg = "ЛИШНЕЕ НАЖАТИЕ!\n\n" +
                            "Когда ВТОРОЙ символ - ЦИФРА,\n" +
                            "не нужно нажимать ничего.\n\n" +
                            "Нажмите K для продолжения.";
                    } else if (trial_type === "AY") {
                        feedback_msg = "НЕВЕРНАЯ КНОПКА!\n\n" +
                            "Если после А идет любая другая буква кроме Х,\n" +
                            "на неё нужно нажимать M.\n\n" +
                            "Нажмите K для продолжения.";
                    } else if (trial_type === "BX") {
                        feedback_msg = "НЕВЕРНАЯ КНОПКА!\n\n" +
                            "Если ПЕРВАЯ буква - не А, а ВТОРАЯ - Х,\n" +
                            "нужно нажимать M и на ПЕРВУЮ (не А) букву,\n" +
                            "и на ВТОРУЮ (Х).\n\n" +
                            "Нажмите K для продолжения.";
                    } else {
                        feedback_msg = "НЕВЕРНАЯ КНОПКА!\n\n" +
                            "В этом случае нужно было нажать M на обе буквы.\n\n" +
                            "Нажмите K для продолжения.";
                    }
                    show_feedback = true;
                } else {
                    show_feedback = false;
                    continueRoutine = false;
                }
            } else {
                if (trial_type === "Ang" || trial_type === "Bng") {
                    show_feedback = false;
                    continueRoutine = false;
                } else if (trial_type === "AX") {
                    feedback_msg = "СЛИШКОМ МЕДЛЕННО!\n\n" +
                        "Когда ПЕРВАЯ буква - A и ВТОРАЯ - X,\n" +
                        "нужно нажать Z на ВТОРУЮ (Х).\n\n" +
                        "Нажмите K для продолжения.";
                    show_feedback = true;
                } else {
                    feedback_msg = "СЛИШКОМ МЕДЛЕННО!\n\n" +
                        "На ВТОРУЮ букву нужно быстро нажать M.\n\n" +
                        "Нажмите K для продолжения.";
                    show_feedback = true;
                }
            }
        }
        feedback_text.setText(feedback_msg);
        feedback_key.keys = undefined;
        feedback_key.rt = undefined;
        _feedback_key_allKeys = [];
        psychoJS.experiment.addData('feedback.started', globalClock.getTime());
        feedbackMaxDuration = null
        // keep track of which components have finished
        feedbackComponents = [];
        feedbackComponents.push(feedback_text);
        feedbackComponents.push(feedback_key);
        
        for (const thisComponent of feedbackComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function feedbackRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'feedback' ---
        // get current time
        t = feedbackClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *feedback_text* updates
        if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          feedback_text.tStart = t;  // (not accounting for frame time here)
          feedback_text.frameNStart = frameN;  // exact frame index
          
          feedback_text.setAutoDraw(true);
        }
        
        
        // if feedback_text is active this frame...
        if (feedback_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *feedback_key* updates
        if (t >= 0.0 && feedback_key.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          feedback_key.tStart = t;  // (not accounting for frame time here)
          feedback_key.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          feedback_key.clock.reset();
          feedback_key.start();
          feedback_key.clearEvents();
        }
        
        // if feedback_key is active this frame...
        if (feedback_key.status === PsychoJS.Status.STARTED) {
          let theseKeys = feedback_key.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _feedback_key_allKeys = _feedback_key_allKeys.concat(theseKeys);
          if (_feedback_key_allKeys.length > 0) {
            feedback_key.keys = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].name;  // just the last key pressed
            feedback_key.rt = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].rt;
            feedback_key.duration = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of feedbackComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function feedbackRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'feedback' ---
        for (const thisComponent of feedbackComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(feedback_key.corr, level);
        }
        psychoJS.experiment.addData('feedback_key.keys', feedback_key.keys);
        if (typeof feedback_key.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('feedback_key.rt', feedback_key.rt);
            psychoJS.experiment.addData('feedback_key.duration', feedback_key.duration);
            routineTimer.reset();
            }
        
        feedback_key.stop();
        // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var instruction6MaxDurationReached;
var _instruction6_endkey_allKeys;
var instruction6MaxDuration;
var instruction6Components;
function instruction6RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'instruction6' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        instruction6Clock.reset();
        routineTimer.reset();
        instruction6MaxDurationReached = false;
        // update component parameters for each repeat
        instruction6_endkey.keys = undefined;
        instruction6_endkey.rt = undefined;
        _instruction6_endkey_allKeys = [];
        psychoJS.experiment.addData('instruction6.started', globalClock.getTime());
        instruction6MaxDuration = null
        // keep track of which components have finished
        instruction6Components = [];
        instruction6Components.push(instruction6_text);
        instruction6Components.push(instruction6_endkey);
        
        for (const thisComponent of instruction6Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function instruction6RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'instruction6' ---
        // get current time
        t = instruction6Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *instruction6_text* updates
        if (t >= 0.0 && instruction6_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          instruction6_text.tStart = t;  // (not accounting for frame time here)
          instruction6_text.frameNStart = frameN;  // exact frame index
          
          instruction6_text.setAutoDraw(true);
        }
        
        
        // if instruction6_text is active this frame...
        if (instruction6_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *instruction6_endkey* updates
        if (t >= 0.0 && instruction6_endkey.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          instruction6_endkey.tStart = t;  // (not accounting for frame time here)
          instruction6_endkey.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          instruction6_endkey.clock.reset();
          instruction6_endkey.start();
          instruction6_endkey.clearEvents();
        }
        
        // if instruction6_endkey is active this frame...
        if (instruction6_endkey.status === PsychoJS.Status.STARTED) {
          let theseKeys = instruction6_endkey.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _instruction6_endkey_allKeys = _instruction6_endkey_allKeys.concat(theseKeys);
          if (_instruction6_endkey_allKeys.length > 0) {
            instruction6_endkey.keys = _instruction6_endkey_allKeys[_instruction6_endkey_allKeys.length - 1].name;  // just the last key pressed
            instruction6_endkey.rt = _instruction6_endkey_allKeys[_instruction6_endkey_allKeys.length - 1].rt;
            instruction6_endkey.duration = _instruction6_endkey_allKeys[_instruction6_endkey_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of instruction6Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function instruction6RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'instruction6' ---
        for (const thisComponent of instruction6Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('instruction6.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(instruction6_endkey.corr, level);
        }
        psychoJS.experiment.addData('instruction6_endkey.keys', instruction6_endkey.keys);
        if (typeof instruction6_endkey.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('instruction6_endkey.rt', instruction6_endkey.rt);
            psychoJS.experiment.addData('instruction6_endkey.duration', instruction6_endkey.duration);
            routineTimer.reset();
            }
        
        instruction6_endkey.stop();
        // the Routine "instruction6" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var instruction7MaxDurationReached;
var _instruction7_endkey_allKeys;
var instruction7MaxDuration;
var instruction7Components;
function instruction7RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'instruction7' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        instruction7Clock.reset();
        routineTimer.reset();
        instruction7MaxDurationReached = false;
        // update component parameters for each repeat
        instruction7_endkey.keys = undefined;
        instruction7_endkey.rt = undefined;
        _instruction7_endkey_allKeys = [];
        psychoJS.experiment.addData('instruction7.started', globalClock.getTime());
        instruction7MaxDuration = null
        // keep track of which components have finished
        instruction7Components = [];
        instruction7Components.push(instruction7_text);
        instruction7Components.push(instruction7_endkey);
        
        for (const thisComponent of instruction7Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function instruction7RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'instruction7' ---
        // get current time
        t = instruction7Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *instruction7_text* updates
        if (t >= 0.0 && instruction7_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          instruction7_text.tStart = t;  // (not accounting for frame time here)
          instruction7_text.frameNStart = frameN;  // exact frame index
          
          instruction7_text.setAutoDraw(true);
        }
        
        
        // if instruction7_text is active this frame...
        if (instruction7_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *instruction7_endkey* updates
        if (t >= 0.0 && instruction7_endkey.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          instruction7_endkey.tStart = t;  // (not accounting for frame time here)
          instruction7_endkey.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          instruction7_endkey.clock.reset();
          instruction7_endkey.start();
          instruction7_endkey.clearEvents();
        }
        
        // if instruction7_endkey is active this frame...
        if (instruction7_endkey.status === PsychoJS.Status.STARTED) {
          let theseKeys = instruction7_endkey.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _instruction7_endkey_allKeys = _instruction7_endkey_allKeys.concat(theseKeys);
          if (_instruction7_endkey_allKeys.length > 0) {
            instruction7_endkey.keys = _instruction7_endkey_allKeys[_instruction7_endkey_allKeys.length - 1].name;  // just the last key pressed
            instruction7_endkey.rt = _instruction7_endkey_allKeys[_instruction7_endkey_allKeys.length - 1].rt;
            instruction7_endkey.duration = _instruction7_endkey_allKeys[_instruction7_endkey_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of instruction7Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function instruction7RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'instruction7' ---
        for (const thisComponent of instruction7Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('instruction7.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(instruction7_endkey.corr, level);
        }
        psychoJS.experiment.addData('instruction7_endkey.keys', instruction7_endkey.keys);
        if (typeof instruction7_endkey.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('instruction7_endkey.rt', instruction7_endkey.rt);
            psychoJS.experiment.addData('instruction7_endkey.duration', instruction7_endkey.duration);
            routineTimer.reset();
            }
        
        instruction7_endkey.stop();
        // the Routine "instruction7" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var instruction8MaxDurationReached;
var _instruction8_endkey_allKeys;
var instruction8MaxDuration;
var instruction8Components;
function instruction8RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'instruction8' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        instruction8Clock.reset();
        routineTimer.reset();
        instruction8MaxDurationReached = false;
        // update component parameters for each repeat
        instruction8_endkey.keys = undefined;
        instruction8_endkey.rt = undefined;
        _instruction8_endkey_allKeys = [];
        psychoJS.experiment.addData('instruction8.started', globalClock.getTime());
        instruction8MaxDuration = null
        // keep track of which components have finished
        instruction8Components = [];
        instruction8Components.push(instruction8_text);
        instruction8Components.push(instruction8_endkey);
        
        for (const thisComponent of instruction8Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function instruction8RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'instruction8' ---
        // get current time
        t = instruction8Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *instruction8_text* updates
        if (t >= 0.0 && instruction8_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          instruction8_text.tStart = t;  // (not accounting for frame time here)
          instruction8_text.frameNStart = frameN;  // exact frame index
          
          instruction8_text.setAutoDraw(true);
        }
        
        
        // if instruction8_text is active this frame...
        if (instruction8_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *instruction8_endkey* updates
        if (t >= 0.0 && instruction8_endkey.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          instruction8_endkey.tStart = t;  // (not accounting for frame time here)
          instruction8_endkey.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          instruction8_endkey.clock.reset();
          instruction8_endkey.start();
          instruction8_endkey.clearEvents();
        }
        
        // if instruction8_endkey is active this frame...
        if (instruction8_endkey.status === PsychoJS.Status.STARTED) {
          let theseKeys = instruction8_endkey.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _instruction8_endkey_allKeys = _instruction8_endkey_allKeys.concat(theseKeys);
          if (_instruction8_endkey_allKeys.length > 0) {
            instruction8_endkey.keys = _instruction8_endkey_allKeys[_instruction8_endkey_allKeys.length - 1].name;  // just the last key pressed
            instruction8_endkey.rt = _instruction8_endkey_allKeys[_instruction8_endkey_allKeys.length - 1].rt;
            instruction8_endkey.duration = _instruction8_endkey_allKeys[_instruction8_endkey_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of instruction8Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function instruction8RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'instruction8' ---
        for (const thisComponent of instruction8Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('instruction8.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(instruction8_endkey.corr, level);
        }
        psychoJS.experiment.addData('instruction8_endkey.keys', instruction8_endkey.keys);
        if (typeof instruction8_endkey.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('instruction8_endkey.rt', instruction8_endkey.rt);
            psychoJS.experiment.addData('instruction8_endkey.duration', instruction8_endkey.duration);
            routineTimer.reset();
            }
        
        instruction8_endkey.stop();
        // the Routine "instruction8" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var practice_endMaxDurationReached;
var _practice_endkey_allKeys;
var practice_endMaxDuration;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'practice_end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        practice_endClock.reset();
        routineTimer.reset();
        practice_endMaxDurationReached = false;
        // update component parameters for each repeat
        practice_endkey.keys = undefined;
        practice_endkey.rt = undefined;
        _practice_endkey_allKeys = [];
        psychoJS.experiment.addData('practice_end.started', globalClock.getTime());
        practice_endMaxDuration = null
        // keep track of which components have finished
        practice_endComponents = [];
        practice_endComponents.push(practice_endtext);
        practice_endComponents.push(practice_endkey);
        
        for (const thisComponent of practice_endComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function practice_endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'practice_end' ---
        // get current time
        t = practice_endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *practice_endtext* updates
        if (t >= 0 && practice_endtext.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          practice_endtext.tStart = t;  // (not accounting for frame time here)
          practice_endtext.frameNStart = frameN;  // exact frame index
          
          practice_endtext.setAutoDraw(true);
        }
        
        
        // if practice_endtext is active this frame...
        if (practice_endtext.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *practice_endkey* updates
        if (t >= 0.0 && practice_endkey.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          practice_endkey.tStart = t;  // (not accounting for frame time here)
          practice_endkey.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          practice_endkey.clock.reset();
          practice_endkey.start();
          practice_endkey.clearEvents();
        }
        
        // if practice_endkey is active this frame...
        if (practice_endkey.status === PsychoJS.Status.STARTED) {
          let theseKeys = practice_endkey.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _practice_endkey_allKeys = _practice_endkey_allKeys.concat(theseKeys);
          if (_practice_endkey_allKeys.length > 0) {
            practice_endkey.keys = _practice_endkey_allKeys[_practice_endkey_allKeys.length - 1].name;  // just the last key pressed
            practice_endkey.rt = _practice_endkey_allKeys[_practice_endkey_allKeys.length - 1].rt;
            practice_endkey.duration = _practice_endkey_allKeys[_practice_endkey_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of practice_endComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function practice_endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'practice_end' ---
        for (const thisComponent of practice_endComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('practice_end.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(practice_endkey.corr, level);
        }
        psychoJS.experiment.addData('practice_endkey.keys', practice_endkey.keys);
        if (typeof practice_endkey.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('practice_endkey.rt', practice_endkey.rt);
            psychoJS.experiment.addData('practice_endkey.duration', practice_endkey.duration);
            routineTimer.reset();
            }
        
        practice_endkey.stop();
        // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var block_breakMaxDurationReached;
var _block_break_key_allKeys;
var block_breakMaxDuration;
var block_breakComponents;
function block_breakRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'block_break' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        block_breakClock.reset();
        routineTimer.reset();
        block_breakMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from block_break_code
if (blocksloop.thisN === (blocksloop.nTotal - 1)) {
    continueRoutine = false;
} else {
    block_break_text.setText("Вы выполнили 1/3 (или 2/3) эксперимента!\n\nПожалуйста, сделайте перерыв на 1–5 минут.\n\nЧерез одну минуту вы сможете продолжить выполнение задания.\n\nЕсли вам нужно больше времени, это нормально, но, пожалуйста, не делайте перерыв дольше 5 минут.");
    break_text_changed = false;
}
        block_break_key.keys = undefined;
        block_break_key.rt = undefined;
        _block_break_key_allKeys = [];
        psychoJS.experiment.addData('block_break.started', globalClock.getTime());
        block_breakMaxDuration = null
        // keep track of which components have finished
        block_breakComponents = [];
        block_breakComponents.push(block_break_text);
        block_breakComponents.push(block_break_key);
        
        for (const thisComponent of block_breakComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
var break_text_changed;
function block_breakRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'block_break' ---
        // get current time
        t = block_breakClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *block_break_text* updates
        if (t >= 0 && block_break_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          block_break_text.tStart = t;  // (not accounting for frame time here)
          block_break_text.frameNStart = frameN;  // exact frame index
          
          block_break_text.setAutoDraw(true);
        }
        
        
        // if block_break_text is active this frame...
        if (block_break_text.status === PsychoJS.Status.STARTED) {
        }
        
        // Run 'Each Frame' code from block_break_code
        if ((t >= 3) && !break_text_changed) {
            block_break_text.setText("Минута прошла.\n\nНажмите ПРОБЕЛ, если готовы продолжить, либо отдохните ещё несколько минут (не более 5).");
            break_text_changed = true;
        }
        
        // *block_break_key* updates
        if (t >= 1 && block_break_key.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          block_break_key.tStart = t;  // (not accounting for frame time here)
          block_break_key.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          block_break_key.clock.reset();
          block_break_key.start();
          block_break_key.clearEvents();
        }
        
        // if block_break_key is active this frame...
        if (block_break_key.status === PsychoJS.Status.STARTED) {
          let theseKeys = block_break_key.getKeys({
            keyList: typeof ['space',] === 'string' ? [['space',]] : ['space',], 
            waitRelease: false
          });
          _block_break_key_allKeys = _block_break_key_allKeys.concat(theseKeys);
          if (_block_break_key_allKeys.length > 0) {
            block_break_key.keys = _block_break_key_allKeys[_block_break_key_allKeys.length - 1].name;  // just the last key pressed
            block_break_key.rt = _block_break_key_allKeys[_block_break_key_allKeys.length - 1].rt;
            block_break_key.duration = _block_break_key_allKeys[_block_break_key_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of block_breakComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function block_breakRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'block_break' ---
        for (const thisComponent of block_breakComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('block_break.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(block_break_key.corr, level);
        }
        psychoJS.experiment.addData('block_break_key.keys', block_break_key.keys);
        if (typeof block_break_key.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('block_break_key.rt', block_break_key.rt);
            psychoJS.experiment.addData('block_break_key.duration', block_break_key.duration);
            routineTimer.reset();
            }
        
        block_break_key.stop();
        // the Routine "block_break" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var endMaxDurationReached;
var _end_key_resp_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        endClock.reset();
        routineTimer.reset();
        endMaxDurationReached = false;
        // update component parameters for each repeat
        end_key_resp.keys = undefined;
        end_key_resp.rt = undefined;
        _end_key_resp_allKeys = [];
        psychoJS.experiment.addData('end.started', globalClock.getTime());
        endMaxDuration = null
        // keep track of which components have finished
        endComponents = [];
        endComponents.push(end_text);
        endComponents.push(end_key_resp);
        
        for (const thisComponent of endComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end' ---
        // get current time
        t = endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *end_text* updates
        if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          end_text.tStart = t;  // (not accounting for frame time here)
          end_text.frameNStart = frameN;  // exact frame index
          
          end_text.setAutoDraw(true);
        }
        
        
        // if end_text is active this frame...
        if (end_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *end_key_resp* updates
        if (t >= 0.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          end_key_resp.tStart = t;  // (not accounting for frame time here)
          end_key_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { end_key_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { end_key_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { end_key_resp.clearEvents(); });
        }
        
        // if end_key_resp is active this frame...
        if (end_key_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = end_key_resp.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
          if (_end_key_resp_allKeys.length > 0) {
            end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
            end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
            end_key_resp.duration = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of endComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end' ---
        for (const thisComponent of endComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('end.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(end_key_resp.corr, level);
        }
        psychoJS.experiment.addData('end_key_resp.keys', end_key_resp.keys);
        if (typeof end_key_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('end_key_resp.rt', end_key_resp.rt);
            psychoJS.experiment.addData('end_key_resp.duration', end_key_resp.duration);
            routineTimer.reset();
            }
        
        end_key_resp.stop();
        // the Routine "end" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var questionnareMaxDurationReached;
var answered;
var questionnareMaxDuration;
var questionnareComponents;
function questionnareRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'questionnare' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        questionnareClock.reset();
        routineTimer.reset();
        questionnareMaxDurationReached = false;
        // update component parameters for each repeat
        question_text.setText(question);
        btn1.setText(opt1);
        // reset btn1 to account for continued clicks & clear times on/off
        btn1.reset()
        btn2.setText(opt2);
        // reset btn2 to account for continued clicks & clear times on/off
        btn2.reset()
        btn3.setText(opt3);
        // reset btn3 to account for continued clicks & clear times on/off
        btn3.reset()
        btn4.setText(opt4);
        // reset btn4 to account for continued clicks & clear times on/off
        btn4.reset()
        btn5.setText(opt5);
        // reset btn5 to account for continued clicks & clear times on/off
        btn5.reset()
        // Run 'Begin Routine' code from code_questionnaire
        psychoJS.window.mouseVisible = true;
        
        
        answered = false;
        
        var btns = [btn1, btn2, btn3, btn4, btn5];
        for (var i = 0; i < btns.length; i++) {
            btns[i].timesOn = [];
            btns[i].timesOff = [];
            btns[i].clock.reset();
        }
        
        btn1.setText(opt1);
        btn2.setText(opt2);
        btn3.setText(opt3);
        btn4.setText(opt4);
        btn5.setText(opt5);
        psychoJS.experiment.addData('questionnare.started', globalClock.getTime());
        questionnareMaxDuration = null
        // keep track of which components have finished
        questionnareComponents = [];
        questionnareComponents.push(question_text);
        questionnareComponents.push(btn1);
        questionnareComponents.push(btn2);
        questionnareComponents.push(btn3);
        questionnareComponents.push(btn4);
        questionnareComponents.push(btn5);
        
        for (const thisComponent of questionnareComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function questionnareRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'questionnare' ---
        // get current time
        t = questionnareClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *question_text* updates
        if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          question_text.tStart = t;  // (not accounting for frame time here)
          question_text.frameNStart = frameN;  // exact frame index
          
          question_text.setAutoDraw(true);
        }
        
        
        // if question_text is active this frame...
        if (question_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *btn1* updates
        if (t >= 0 && btn1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn1.tStart = t;  // (not accounting for frame time here)
          btn1.frameNStart = frameN;  // exact frame index
          
          btn1.setAutoDraw(true);
        }
        
        
        // if btn1 is active this frame...
        if (btn1.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn1.status === PsychoJS.Status.STARTED) {
          // check whether btn1 has been pressed
          if (btn1.isClicked) {
            if (!btn1.wasClicked) {
              // store time of first click
              btn1.timesOn.push(btn1.clock.getTime());
              // store time clicked until
              btn1.timesOff.push(btn1.clock.getTime());
            } else {
              // update time clicked until;
              btn1.timesOff[btn1.timesOff.length - 1] = btn1.clock.getTime();
            }
            if (!btn1.wasClicked) {
              // end routine when btn1 is clicked
              continueRoutine = false;
              
            }
            // if btn1 is still clicked next frame, it is not a new click
            btn1.wasClicked = true;
          } else {
            // if btn1 is clicked next frame, it is a new click
            btn1.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn1 hasn't started / has finished
          btn1.clock.reset();
          // if btn1 is clicked next frame, it is a new click
          btn1.wasClicked = false;
        }
        
        // *btn2* updates
        if (t >= 0 && btn2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn2.tStart = t;  // (not accounting for frame time here)
          btn2.frameNStart = frameN;  // exact frame index
          
          btn2.setAutoDraw(true);
        }
        
        
        // if btn2 is active this frame...
        if (btn2.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn2.status === PsychoJS.Status.STARTED) {
          // check whether btn2 has been pressed
          if (btn2.isClicked) {
            if (!btn2.wasClicked) {
              // store time of first click
              btn2.timesOn.push(btn2.clock.getTime());
              // store time clicked until
              btn2.timesOff.push(btn2.clock.getTime());
            } else {
              // update time clicked until;
              btn2.timesOff[btn2.timesOff.length - 1] = btn2.clock.getTime();
            }
            if (!btn2.wasClicked) {
              // end routine when btn2 is clicked
              continueRoutine = false;
              
            }
            // if btn2 is still clicked next frame, it is not a new click
            btn2.wasClicked = true;
          } else {
            // if btn2 is clicked next frame, it is a new click
            btn2.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn2 hasn't started / has finished
          btn2.clock.reset();
          // if btn2 is clicked next frame, it is a new click
          btn2.wasClicked = false;
        }
        
        // *btn3* updates
        if (t >= 0 && btn3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn3.tStart = t;  // (not accounting for frame time here)
          btn3.frameNStart = frameN;  // exact frame index
          
          btn3.setAutoDraw(true);
        }
        
        
        // if btn3 is active this frame...
        if (btn3.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn3.status === PsychoJS.Status.STARTED) {
          // check whether btn3 has been pressed
          if (btn3.isClicked) {
            if (!btn3.wasClicked) {
              // store time of first click
              btn3.timesOn.push(btn3.clock.getTime());
              // store time clicked until
              btn3.timesOff.push(btn3.clock.getTime());
            } else {
              // update time clicked until;
              btn3.timesOff[btn3.timesOff.length - 1] = btn3.clock.getTime();
            }
            if (!btn3.wasClicked) {
              // end routine when btn3 is clicked
              continueRoutine = false;
              
            }
            // if btn3 is still clicked next frame, it is not a new click
            btn3.wasClicked = true;
          } else {
            // if btn3 is clicked next frame, it is a new click
            btn3.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn3 hasn't started / has finished
          btn3.clock.reset();
          // if btn3 is clicked next frame, it is a new click
          btn3.wasClicked = false;
        }
        
        // *btn4* updates
        if (t >= 0 && btn4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn4.tStart = t;  // (not accounting for frame time here)
          btn4.frameNStart = frameN;  // exact frame index
          
          btn4.setAutoDraw(true);
        }
        
        
        // if btn4 is active this frame...
        if (btn4.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn4.status === PsychoJS.Status.STARTED) {
          // check whether btn4 has been pressed
          if (btn4.isClicked) {
            if (!btn4.wasClicked) {
              // store time of first click
              btn4.timesOn.push(btn4.clock.getTime());
              // store time clicked until
              btn4.timesOff.push(btn4.clock.getTime());
            } else {
              // update time clicked until;
              btn4.timesOff[btn4.timesOff.length - 1] = btn4.clock.getTime();
            }
            if (!btn4.wasClicked) {
              // end routine when btn4 is clicked
              continueRoutine = false;
              
            }
            // if btn4 is still clicked next frame, it is not a new click
            btn4.wasClicked = true;
          } else {
            // if btn4 is clicked next frame, it is a new click
            btn4.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn4 hasn't started / has finished
          btn4.clock.reset();
          // if btn4 is clicked next frame, it is a new click
          btn4.wasClicked = false;
        }
        
        // *btn5* updates
        if (t >= 0 && btn5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn5.tStart = t;  // (not accounting for frame time here)
          btn5.frameNStart = frameN;  // exact frame index
          
          btn5.setAutoDraw(true);
        }
        
        
        // if btn5 is active this frame...
        if (btn5.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn5.status === PsychoJS.Status.STARTED) {
          // check whether btn5 has been pressed
          if (btn5.isClicked) {
            if (!btn5.wasClicked) {
              // store time of first click
              btn5.timesOn.push(btn5.clock.getTime());
              // store time clicked until
              btn5.timesOff.push(btn5.clock.getTime());
            } else {
              // update time clicked until;
              btn5.timesOff[btn5.timesOff.length - 1] = btn5.clock.getTime();
            }
            if (!btn5.wasClicked) {
              // end routine when btn5 is clicked
              continueRoutine = false;
              
            }
            // if btn5 is still clicked next frame, it is not a new click
            btn5.wasClicked = true;
          } else {
            // if btn5 is clicked next frame, it is a new click
            btn5.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn5 hasn't started / has finished
          btn5.clock.reset();
          // if btn5 is clicked next frame, it is a new click
          btn5.wasClicked = false;
        }
        // Run 'Each Frame' code from code_questionnaire
        // Управление видимостью btn5
        var opt5isempty = (opt5 === null || opt5 === undefined || String(opt5).trim() === '' || String(opt5).trim().toLowerCase() === 'none');
        if (opt5isempty) {
            btn5.opacity = 0;
            btn5.disabled = true;
        } else {
            btn5.opacity = 1;
            btn5.disabled = false;
        }
        
        // Фиксация ответа
        if (!answered && t > 0.3) {
            if (btn1.isClicked) {
                psychoJS.experiment.addData('qnumber', questionsloop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt1);
                continueRoutine = false;
                answered = true;
            } else if (btn2.isClicked) {
                psychoJS.experiment.addData('qnumber', questionsloop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt2);
                continueRoutine = false;
                answered = true;
            } else if (btn3.isClicked) {
                psychoJS.experiment.addData('qnumber', questionsloop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt3);
                continueRoutine = false;
                answered = true;
            } else if (btn4.isClicked) {
                psychoJS.experiment.addData('qnumber', questionsloop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt4);
                continueRoutine = false;
                answered = true;
            } else if (btn5.isClicked && !opt5isempty) {
                psychoJS.experiment.addData('qnumber', questionsloop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt5);
                continueRoutine = false;
                answered = true;
            }
        }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of questionnareComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function questionnareRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'questionnare' ---
        for (const thisComponent of questionnareComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('questionnare.stopped', globalClock.getTime());
        psychoJS.experiment.addData('btn1.numClicks', btn1.numClicks);
        psychoJS.experiment.addData('btn1.timesOn', btn1.timesOn);
        psychoJS.experiment.addData('btn1.timesOff', btn1.timesOff);
        psychoJS.experiment.addData('btn2.numClicks', btn2.numClicks);
        psychoJS.experiment.addData('btn2.timesOn', btn2.timesOn);
        psychoJS.experiment.addData('btn2.timesOff', btn2.timesOff);
        psychoJS.experiment.addData('btn3.numClicks', btn3.numClicks);
        psychoJS.experiment.addData('btn3.timesOn', btn3.timesOn);
        psychoJS.experiment.addData('btn3.timesOff', btn3.timesOff);
        psychoJS.experiment.addData('btn4.numClicks', btn4.numClicks);
        psychoJS.experiment.addData('btn4.timesOn', btn4.timesOn);
        psychoJS.experiment.addData('btn4.timesOff', btn4.timesOff);
        psychoJS.experiment.addData('btn5.numClicks', btn5.numClicks);
        psychoJS.experiment.addData('btn5.timesOn', btn5.timesOn);
        psychoJS.experiment.addData('btn5.timesOff', btn5.timesOff);
        // the Routine "questionnare" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'thanks' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        thanksClock.reset(routineTimer.getTime());
        routineTimer.add(1.000000);
        thanksMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('thanks.started', globalClock.getTime());
        thanksMaxDuration = null
        // keep track of which components have finished
        thanksComponents = [];
        thanksComponents.push(thanks_text);
        
        for (const thisComponent of thanksComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function thanksRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'thanks' ---
        // get current time
        t = thanksClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *thanks_text* updates
        if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          thanks_text.tStart = t;  // (not accounting for frame time here)
          thanks_text.frameNStart = frameN;  // exact frame index
          
          thanks_text.setAutoDraw(true);
        }
        
        
        // if thanks_text is active this frame...
        if (thanks_text.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          thanks_text.tStop = t;  // not accounting for scr refresh
          thanks_text.frameNStop = frameN;  // exact frame index
          // update status
          thanks_text.status = PsychoJS.Status.FINISHED;
          thanks_text.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of thanksComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function thanksRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'thanks' ---
        for (const thisComponent of thanksComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (thanksMaxDurationReached) {
            thanksClock.add(thanksMaxDuration);
        } else {
            thanksClock.add(1.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var data_saveMaxDurationReached;
var data_saveMaxDuration;
var data_saveComponents;
function data_saveRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'data_save' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        data_saveClock.reset(routineTimer.getTime());
        routineTimer.add(3.000000);
        data_saveMaxDurationReached = false;
        // update component parameters for each repeat
        // Disable downloading results to browser
        psychoJS._saveResults = 0;
        
        // Generate filename with participant ID
        let filename = psychoJS._experiment.extraInfo['participant'] + '_' +
            psychoJS._experiment._experimentName + '_' +
            psychoJS._experiment._datetime + '.csv';
        
        // Extract data object from experiment
        let dataObj = psychoJS._experiment._trialsData;
        
        // Convert data object to CSV
        let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
            return Object.values(it).toString()
        }).join('\n')
        
        // Send data to OSF via DataPipe
        console.log('Saving data...');
        fetch('https://pipe.jspsych.org/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: '9VlQFtjGATi8',
                filename: filename,
                data: data,
            }),
        }).then(response => response.json()).then(data => {
            console.log(data);
            quitPsychoJS();
        })
        psychoJS.experiment.addData('data_save.started', globalClock.getTime());
        data_saveMaxDuration = null
        // keep track of which components have finished
        data_saveComponents = [];
        data_saveComponents.push(text_data_save);
        
        for (const thisComponent of data_saveComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function data_saveRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'data_save' ---
        // get current time
        t = data_saveClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_data_save* updates
        if (t >= 0.0 && text_data_save.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_data_save.tStart = t;  // (not accounting for frame time here)
          text_data_save.frameNStart = frameN;  // exact frame index
          
          text_data_save.setAutoDraw(true);
        }
        
        
        // if text_data_save is active this frame...
        if (text_data_save.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_data_save.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_data_save.tStop = t;  // not accounting for scr refresh
          text_data_save.frameNStop = frameN;  // exact frame index
          // update status
          text_data_save.status = PsychoJS.Status.FINISHED;
          text_data_save.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of data_saveComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function data_saveRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'data_save' ---
        for (const thisComponent of data_saveComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('data_save.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (data_saveMaxDurationReached) {
            data_saveClock.add(data_saveMaxDuration);
        } else {
            data_saveClock.add(3.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
