import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import { useState } from "react";
import React, { Component } from "react";
import axios from 'axios'
import "../../static/css/custom_order.css";
import NewProject from "./CustomOrderWizard/0NewProject";
import AssemblyMethod from "./CustomOrderWizard/2AssemmblyMethods";
import FurnitureType from "./CustomOrderWizard/1FurnitureType";
import ChooseMaterial from "./CustomOrderWizard/3ChooseMaterial";
import ChooseFront from "./CustomOrderWizard/4ChooseFront";
import ChooseSides from "./CustomOrderWizard/5ChooseSides";
import Shoeing from "./CustomOrderWizard/6Shoeing";
import OpeningMechanisms from "./CustomOrderWizard/7OpeningMechanisms";
import Handles from "./CustomOrderWizard/8Handles";
import ElectricDevices from "./CustomOrderWizard/9ElectricDevices";
import SpecialInstruction from "./CustomOrderWizard/10SpecialInstruction";

function CustomOrder() {
  const [step, setStep] = React.useState(0);
  const [project_name, SetProjectName] = React.useState("");
  const [customer_name, SetCustomerName] = React.useState("");
  const [adress, SetAdress] = React.useState("");
  const [room_type, SetRoomType] = React.useState("");
  const [room_name, SetRoomName] = React.useState("");
  const [drawer_type, SetDrawerType] = React.useState("");
  const [assembly_method, SetAssemblyMethod] = React.useState("");
  const [assembly_method_wood_drawer, SetAssemblyMethodWoodDrawer] = React.useState("");
  const [side_height, SetSideHeight] = React.useState("");
  const [side_align, SetSideAlign] = React.useState("");
  const [base_type, SetBaseType] = React.useState("");
  const [base_height, SetBaseHeight] = React.useState("");
  const [close_furniture_material, SetCloseFurnitureMaterial] = React.useState("");
  const [open_furniture_material, SetOpenFurnitureMaterial] = React.useState("");
  const [drawer_material, SetDrawerMaterial] = React.useState("");
  const [inner_drawer_material, SetInnerDrawerMaterial] = React.useState("");
  const [base_material, SetBaseMaterial] = React.useState("");
  const [fridge_finishing, SetFridgeFinishing] = React.useState("");
  const [front_type, SetFrontType] = React.useState("");
  const [front_model, SetFrontModel] = React.useState("");
  const [front_material, SetFrontMaterial] = React.useState("");
  const [front_finish, SetFrontFinish] = React.useState("");
  const [side_type, SetSideType] = React.useState("");
  const [side_model, SetSideModel] = React.useState("");
  const [side_material, SetSideMaterial] = React.useState("");
  const [side_finish, SetSideFinish] = React.useState("");
  const [rail, SetRail] = React.useState("");
  const [spacing, SetSpacing] = React.useState("");
  const [outer_drawer_type, SetOuterDrawerType] = React.useState("");
  const [inner_drawer_type, SetInnerDrawerType] = React.useState("");
  const [handle, SetHandle] = React.useState("");
  const [opening_mechanisms, SetOpeningMechanism] = React.useState("");
  const [tone, SetTone] = React.useState("");
  const [oven, SetOven] = React.useState("");
  const [stove_top, SetStoveTop] = React.useState("");
  const [dishwasher, SetDishwasher] = React.useState("");
  const [microwave, SetMicrowave] = React.useState("");
  const [stove_ventilator, SetStoveVentilator] = React.useState("");
  const [fridge, SetFridge] = React.useState("");
  const [parquet, SetParquet] = React.useState(false);
  const [parquet_size, SetParquetSize] = React.useState("");
  const [led, SetLed] = React.useState(false);
  const [hanging_method, SetHangingMethod] = React.useState("");
  const [closing, SetClosing] = React.useState("");
  const [cornice, SetCornice] = React.useState(false);
  const [cornice_length, SetCorniceLength] = React.useState("");
  const [legs, SetLegs] = React.useState("");
  const [marble_thickness, SetMarbleThickness] = React.useState("");
  const [final_height, SetFinalHeight] = React.useState("");
  const [top_surfaces_type, SetTopSurfacesType] = React.useState("");
  const [top_surfaces_thickness, SetTopSurfacesThickness] = React.useState("");

  function checkNext(step) {
    switch (step) {
      case 0:
        return project_name === "" || customer_name === "" || adress === "";
      case 1:
        return room_type === "";
      case 2:
        return (
          room_name === "" ||
          drawer_type === "" ||
          assembly_method === "" ||
          assembly_method_wood_drawer === "" ||
          side_height === "" ||
          side_align === "" ||
          base_type === "" ||
          base_height === ""
        );
      case 3:
        return (
          close_furniture_material === "" ||
          open_furniture_material === "" ||
          drawer_material === "" ||
          inner_drawer_material === "" ||
          base_material === "" ||
          fridge_finishing === ""
        );
      case 4:
        return (
          front_type === "" ||
          front_model === "" ||
          front_material === "" ||
          front_finish === ""
        );
      case 5:
        return (
          side_type === "" ||
          side_model === "" ||
          side_material === "" ||
          side_finish === ""
        );
      case 6:
        return (
          rail === "" ||
          outer_drawer_type === "" ||
          inner_drawer_type === "" ||
          tone === "" ||
          spacing === ""
        );
      case 7:
        return opening_mechanisms === "";
      case 8:
        return handle === "";
      case 9:
        return (
          oven === "" ||
          stove_top === "" ||
          dishwasher === "" ||
          microwave === "" ||
          stove_ventilator === "" ||
          fridge === ""
        );
      case 10:
        return false;
    }
  }

  function backButton() {
    if (step !== 0) {
      return (
        <Button variant="primary" onClick={() => setStep(step - 1)}>
          אחורה
        </Button>
      );
    }
  }

  // const backStep = () => {
  //   case 0:

  //   case 1:

  //   case 2:

  //   case 3:

  //   case 4:

  //   case 5:

  //   case 6:

  //   case 7:

  //   case 8:

  //   case 9:

  //   case 10:

  // }
  const submitForm = async () => {
    let formField = new FormData()
    formField.append('project_name',project_name)
    formField.append('customer_name',customer_name)
    formField.append('adress',adress)
    formField.append('room_type',room_type)
    formField.append('room_name',room_name)
    formField.append('drawer_type',drawer_type)
    formField.append('assembly_method',assembly_method)
    formField.append('assembly_method_wood_drawer',assembly_method_wood_drawer)
    formField.append('side_height',side_height)
    formField.append('side_align',side_align)
    formField.append('base_type',base_type)
    formField.append('base_height',base_height)
    formField.append('close_furniture_material',close_furniture_material)
    formField.append('open_furniture_material',open_furniture_material)
    formField.append('drawer_material',drawer_material)
    formField.append('inner_drawer_material',inner_drawer_material)
    formField.append('base_material',base_material)
    formField.append('fridge_finishing',fridge_finishing)
    formField.append('front_type',front_type)
    formField.append('front_model',front_model)
    formField.append('front_material',front_material)
    formField.append('front_finish',front_finish)
    formField.append('side_type',side_type)
    formField.append('side_model',side_model)
    formField.append('side_material',side_material)
    formField.append('side_finish',side_finish)
    formField.append('rail',rail)
    formField.append('spacing',spacing)
    formField.append('outer_drawer_type',outer_drawer_type)
    formField.append('inner_drawer_type',inner_drawer_type)
    formField.append('handle',handle)
    formField.append('opening_mechanisms',opening_mechanisms)
    formField.append('tone',tone)
    formField.append('oven',oven)
    formField.append('stove_top',stove_top)
    formField.append('dishwasher',dishwasher)
    formField.append('microwave',microwave)
    formField.append('stove_ventilator',stove_ventilator)
    formField.append('fridge',fridge)
    formField.append('parquet',parquet)
    formField.append('parquet_size',parquet_size)
    formField.append('led',led)
    formField.append('hanging_method',hanging_method)
    formField.append('closing',closing)
    formField.append('cornice',cornice)
    formField.append('cornice_length',cornice_length)
    formField.append('legs',legs)
    formField.append('marble_thickness',marble_thickness)
    formField.append('final_height',final_height)
    formField.append('top_surfaces_type',top_surfaces_type)
    formField.append('top_surfaces_thickness',top_surfaces_thickness)
    

    await axios({
      method: 'post',
      url:'http://localhost:8000/api/',
      data: formField
    }).then(response=>{
      console.log(response.data);
    })
}

  const nextStep = () => {
    if (step === 10) {
      submitForm();
      // fetch("/api/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     project_name: project_name,
      //     customer_name: customer_name,
      //     adress: adress,
      //     room_type: room_type,
      //     room_name: room_name,
      //     drawer_type: drawer_type,
      //     assembly_method: assembly_method,
      //     assembly_method_wood_drawer: assembly_method_wood_drawer,
      //     side_height: side_height,
      //     side_align: side_align,
      //     base_type: base_type,
      //     base_height: base_height,
      //     close_furniture_material: close_furniture_material,
      //     open_furniture_material: open_furniture_material,
      //     drawer_material: drawer_material,
      //     inner_drawer_material: inner_drawer_material,
      //     base_material: base_material,
      //     fridge_finishing: fridge_finishing,
      //     front_type: front_type,
      //     front_model: front_model,
      //     front_material: front_material,
      //     front_finish: front_finish,
      //     side_type: side_type,
      //     side_model: side_model,
      //     side_material: side_material,
      //     side_finish: side_finish,
      //     rail: rail,
      //     spacing: spacing,
      //     outer_drawer_type: outer_drawer_type,
      //     inner_drawer_type: inner_drawer_type,
      //     handle: handle,
      //     opening_mechanisms: opening_mechanisms,
      //     tone: tone,
      //     oven: oven,
      //     stove_top: stove_top,
      //     dishwasher: dishwasher,
      //     microwave: microwave,
      //     stove_ventilator: stove_ventilator,
      //     fridge: fridge,
      //     parquet: parquet,
      //     parquet_size : parquet_size,
      //     led : led,
      //     hanging_method: hanging_method,
      //     closing: closing,
      //     cornice: cornice,
      //     cornice_length: cornice_length,
      //     legs : legs,
      //     marble_thickness: marble_thickness,
      //     final_height: final_height,
      //     top_surfaces_type: top_surfaces_type,
      //     top_surfaces_thickness: top_surfaces_thickness,
      //   }),
      // }).then(response=>{
      //   console.log(response.data);
      // });
      return;
    }
    if (step === 8 && room_type !== 'kitchen') {
      setStep(step + 2);
    } else {
      setStep(step + 1);
    }
  };


  function nextText() {
    if (step === 10) {
      return "סיים הזמנה";
    } else {
      return "הבא";
    }
  }

  function nextButton() {
    return (
      <Button variant="primary" disabled={checkNext(step)} onClick={nextStep}>
        {nextText()}
      </Button>
    );
  }

  return (
    <div class="container h-100 d-flex justify-content-center" dir="rtl">
      <div class="jumbotron my-auto" dir="rtl">
        <Card>
          <Card.Body>
        <Form>
          <NewProject
            step={step}
            setProjectName={SetProjectName}
            SetCustomerName={SetCustomerName}
            SetAdress={SetAdress}
          />
          <FurnitureType step={step} SetRoomType={SetRoomType} />
          <AssemblyMethod
            step={step}
            SetRoomName={SetRoomName}
            SetAssemblyMethod={SetAssemblyMethod}
            SetDrawerType={SetDrawerType}
            SetAssemblyMethodWoodDrawer={SetAssemblyMethodWoodDrawer}
            SetSideHeight={SetSideHeight}
            SetSideAlign={SetSideAlign}
            SetBaseType={SetBaseType}
            SetBaseHeight={SetBaseHeight}
          />
          <ChooseMaterial
            step={step}
            SetCloseFurnitureMaterial={SetCloseFurnitureMaterial}
            SetOpenFurnitureMaterial={SetOpenFurnitureMaterial}
            SetDrawerMaterial={SetDrawerMaterial}
            SetInnerDrawerMaterial={SetInnerDrawerMaterial}
            SetBaseMaterial={SetBaseMaterial}
            SetFridgeFinishing={SetFridgeFinishing}
          />
          <ChooseFront
            step={step}
            SetFrontType={SetFrontType}
            SetFrontModel={SetFrontModel}
            SetFrontMaterial={SetFrontMaterial}
            SetFrontFinish={SetFrontFinish}
          />
          <ChooseSides
            step={step}
            SetSideType={SetSideType}
            SetSideModel={SetSideModel}
            SetSideMaterial={SetSideMaterial}
            SetSideFinish={SetSideFinish}
          />
          <Shoeing
            step={step}
            SetRail={SetRail}
            SetOuterDrawerType={SetOuterDrawerType}
            SetInnerDrawerType={SetInnerDrawerType}
            SetTone={SetTone}
            SetSpacing={SetSpacing}
          />
          <OpeningMechanisms
            step={step}
            SetOpeningMechanism={SetOpeningMechanism}
          />
          <Handles step={step} SetHandle={SetHandle} />
          <ElectricDevices
            step={step}
            room_type={room_type}
            SetOven={SetOven}
            SetStoveTop={SetStoveTop}
            SetDishwasher={SetDishwasher}
            SetMicrowave={SetMicrowave}
            SetStoveVentilator={SetStoveVentilator}
            SetFridge={SetFridge}
          />
          <SpecialInstruction 
              step={step}
              parquet={parquet}
              led = {led}
              SetParquet = {SetParquet}
              SetParquetSize = {SetParquetSize}
              SetLed = {SetLed}
              SetHangingMethod = {SetHangingMethod}
              SetClosing = {SetClosing}
              SetCornice = {SetCornice}
              SetCorniceLength = {SetCorniceLength}
              SetLegs = {SetLegs}
              SetMarbleThickness = {SetMarbleThickness}
              SetFinalHeight = {SetFinalHeight}
              SetTopSurfacesType = {SetTopSurfacesType}
              SetTopSurfacesThickness = {SetTopSurfacesThickness}
               />
          <Row>
            <Col>{backButton()}</Col>
            <Col />
            <Col>{nextButton()}</Col>
          </Row>
        </Form>
        </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CustomOrder;
