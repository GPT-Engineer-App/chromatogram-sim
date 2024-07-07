import streamlit as st
import pandas as pd
from data_processing import validate_data, preprocess_data

st.title("HPLC Chromatogram Simulation")

uploaded_file = st.file_uploader("Upload your chromatogram data (CSV or Excel)", type=["csv", "xlsx"])

if uploaded_file is not None:
    try:
        if uploaded_file.name.endswith('.csv'):
            data = pd.read_csv(uploaded_file)
        else:
            data = pd.read_excel(uploaded_file)
        
        st.write("Raw Data:")
        st.write(data)
        
        if validate_data(data):
            processed_data = preprocess_data(data)
            st.write("Processed Data:")
            st.write(processed_data)
            
            st.line_chart(processed_data)
        else:
            st.error("Invalid data format. Please upload a valid chromatogram data file.")
    except Exception as e:
        st.error(f"An error occurred: {e}")