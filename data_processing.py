import pandas as pd
import numpy as np

def validate_data(data: pd.DataFrame) -> bool:
    required_columns = ["time", "intensity"]
    return all(column in data.columns for column in required_columns)

def preprocess_data(data: pd.DataFrame) -> pd.DataFrame:
    # Example preprocessing: noise reduction using a simple rolling mean
    data["intensity"] = data["intensity"].rolling(window=5).mean()
    data = data.dropna().reset_index(drop=True)
    return data